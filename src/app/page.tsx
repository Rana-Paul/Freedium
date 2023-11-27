import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex px-5 py-5 h-20 shadow-sm w-full h-20 border-b[1px] flex-row justify-between items-center border-b border-gray-200 bg-white">
        <div>
          <IoReorderThreeOutline className="text-3xl text-gray-600"/>
        </div>
        <div className=" font-bold text-xl">Freedium</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-xl text-gray-600"/>
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <button className="flex hover:border-gray-900 hover:text-gray-900 rounded items-center px-4 py-3 space-x-4 px-4 py-2.5 border border-gray-200">
            <div>Write</div>
            <div>
              <FiEdit />
            </div>
          </button>
        </div>
      </header>

      <section className="grid w-full h-full grid-cols-12 place-items-center">
        <main className="col-span-8 border-r border-gray-300 w-full h-full">this </main>
        <aside className="col-span-4 w-full h-full"></aside>
      </section>
    </div>
  );
}
