import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex h-screen w-full flex-col">
      <header className="border-b[1px] flex h-20 w-full flex-row items-center justify-between border-b border-gray-200 bg-white px-5 py-5 shadow-sm">
        <div>
          <IoReorderThreeOutline className="text-3xl text-gray-600" />
        </div>
        <div className=" text-xl font-bold">Freedium</div>
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
        </div>
      </header>

      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r  border-gray-300 p-5">
          <div className="flex w-full space-y-4 pb-5 ">
            <div className="flex  w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-800"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  name="search"
                  id="search"
                  className="w-full rounded-3xl border px-4 py-1 pl-7 outline-none placeholder:text-sm placeholder:text-gray-300"
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4 text-sm">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gray-200/50 px-5 py-2"
                      key={i}
                    >
                      tag: {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex w-full items-center justify-between border-b border-gray-300 pb-5">
            <div>Aticel</div>
            <div>
              <button className="flex items-center justify-between space-x-2 rounded-3xl border border-gray-800 px-5 py-2.5 text-sm font-semibold">
                <div>following</div>
                <div>
                  <HiChevronDown clasName="text-xl" />
                </div>
              </button>
            </div>
          </div>

          <div className=" mt-5 flex w-full flex-col justify-center space-y-7">
            {/* Main Section */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-3 border-b border-gray-300 pb-3 last:border-none"
              >
                <div className=" flex w-full items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>

                  <div>
                    <div className=" font-semibold">
                      Rana Paul &#x2022; 22 Dec. 2023
                    </div>
                    <div className="text-sm text-gray-500">
                      {" "}
                      Full Stack Developer
                    </div>
                  </div>
                </div>

                <div className="grid w-full grid-cols-12 gap-2">
                  <div className="col-span-8 flex flex-col space-y-3">
                    <p className="text-2xl font-bold text-gray-800 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas, velit.
                    </p>
                    <p className="break-words text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dignissimos, voluptatibus consequatur soluta recusandae
                      dolores nostrum dolore tempora voluptas sint fugiat
                      deleniti, quidem necessitatibus laborum. Ipsa
                      exercitationem tenetur atque adipisci eum provident harum,
                      consequuntur consectetur deleniti veniam dolores in
                      aperiam cumque!
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full transform rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-xl"></div>
                  </div>
                </div>

                <div>
                  <div className="flex w-full items-center justify-start space-x-4 text-sm">
                    <div>My topics:</div>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          className="rounded-3xl bg-gray-200/50 px-5 py-2"
                          key={i}
                        >
                          tag: {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className=" sticky col-span-4 h-full w-full flex-col space-y-4 p-5">
          <div>
            <h3 className="my-4 font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-row items-center space-x-4">
                  <div className=" h-10 w-10 flex-none rounded-full bg-gray-500"></div>
                  <div>
                    <div className=" text-sm font-bold text-gray-800">
                      Lorem, ipsum.
                    </div>
                    <div className="text-xs">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Soluta obcaecati at dolores laborum laboriosam?
                    </div>
                  </div>
                  <div>
                    <button className=" flex items-center space-x-4 rounded border border-gray-400 px-3 py-2  text-sm  hover:border-gray-900 hover:text-gray-900">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" sticky top-20">
            <h3 className="my-5 text-lg font-semibold">Your reading list</h3>

            <div className="flex flex-col space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className="h-ful aspect-square w-2/5 rounded-xl bg-gray-300"></div>

                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className=" text-sm font-semibold group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore, eaque.
                    </div>
                    <div className=" text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse accusantium similique possimus. Corporis, cupiditate
                      quisquam.
                    </div>
                    <div>
                      <div className="flex w-full items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="text-sm font-semibold">Rana Paul &#x2022;</div>
                        <div className="text-sm">Dec 22, 2023</div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
