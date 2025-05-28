'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex mx-auto">
        <h1 className="md:text-4xl text-xl font-bold">Nextjs </h1>
        <h1 className="md:text-4xl text-xl font-bold text-blue-500 whitespace-nowrap mx-3">Better Auth</h1>
        <h1 className="md:text-4xl text-xl font-bold">App!</h1>
      </div>
      <div className="flex min-w-60 mx-auto">
        <Button className=" w-full font-black my-10" asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </main>
  );
}
