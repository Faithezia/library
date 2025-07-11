import { Session } from "next-auth";
import React from "react";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-dark-400 font-semibold text-2xl">{session?.user?.name}</h2>
        <p className="text-slate-500 text-base">Monitor all of the users and books</p>
      </div>
      <p>search</p>
    </header>
  );
};

export default Header;
