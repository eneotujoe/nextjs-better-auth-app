'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex mx-auto">
        <h1 className="text-4xl font-bold">Nextjs </h1>
        <h1 className="text-4xl font-bold text-blue-500 mx-3">Better Auth</h1>
        <h1 className="text-4xl font-bold">App!</h1>
      </div>
      <div className="flex mx-auto">
        <Button className="w-3xs my-10" asChild>
          <Link href='/login' className="font-bold">Login</Link>
        </Button>
      </div>
    </main>
  );
}
