"use client";
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

function MainLayout({ children }: React.PropsWithChildren) {
  const { data: sessionData, status } = useSession();

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="border-b[1px] flex h-20 w-full flex-row items-center justify-between border-b border-gray-200 bg-white px-5 py-5 shadow-sm">
        <div>
          <IoReorderThreeOutline className="text-3xl text-gray-600" />
        </div>
        <div className=" text-xl font-bold">Freedium</div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>
            <button className="flex items-center space-x-4 rounded border border-gray-200 px-4  py-2.5  hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>

            <div>
            <button onClick={() => signOut()} className="flex items-center space-x-4 rounded border border-gray-200 px-4  py-2.5  hover:border-gray-900 hover:text-gray-900">
              <div>Logout</div>
              <div>
                <CiLogout />
              </div>
            </button>

            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-4 rounded border border-gray-200 px-4  py-2.5  hover:border-gray-900 hover:text-gray-900"
            >
              Singin
            </button>
          </div>
        )}
      </header>
      {children}
    </div>
  );
}

export default MainLayout;
