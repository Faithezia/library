import { Description } from "@radix-ui/react-toast";
import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const bookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2)
    .max(100, "Title must be between 2 and 100 characters"),
  description: z
    .string()
    .trim()
    .min(10)
    .max(1000, "Description must be between 10 and 1000 characters"),
  author: z
    .string()
    .trim()
    .min(2)
    .max(100, "Author name must be between 2 and 100 characters"),
  genre: z
    .string()
    .trim()
    .min(2)
    .max(50, "Genre must be between 2 and 50 characters"),
  rating: z.coerce.number().min(1).max(5, "Rating must be between 1 and 5"),
  totalCopies: z.coerce
    .number()
    .int()
    .positive()
    .lte(10000, "Total copies must be a positive integer not exceeding 10,000"),
  coverUrl: z.string().nonempty("Cover URL is required"),
  coverColor: z
    .string()
    .trim()
    .regex(/^#[0-9A-F]{6}$/i),
  videoUrl: z.string().nonempty("Video URL is required"),
  summary: z.string().trim().min(10),
});
