import Appbar from "@/components/Appbar";
import prisma from "@/db";
import Image from "next/image";

async function fetchData() {
  const data = await prisma.user.findFirst({})
  
  return { username: data?.username };
}


export default async function UserSegment() {
  const user = await fetchData()

  return (
    <div className="min-h-screen flex flex-col">
      <Appbar />

      <div className="flex-grow flex items-center justify-center">
        <section className="mb-2 border p-4 rounded-lg max-w-full bg-neutral-100">
          <div className="mx-auto">
            <div className="card md:flex max-w-lg">
              <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                <Image
                  className="object-cover rounded-full"
                  src="https://tailwindflex.com/public/images/user.png"
                  alt="user avatar"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="font-thin">{user.username}</p>
                <h3 className="text-xl heading">{user.username}</h3>
                <p className="mt-2 mb-3">
                  {user.username} is a Developer, mainly works in backend
                  technologies.
                </p>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
