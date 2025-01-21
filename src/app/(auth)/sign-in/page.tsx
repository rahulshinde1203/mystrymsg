'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-4">
        <p>Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 px-3 py-1 mt-4 rounded text-white"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <p>Not signed in</p>
      <button
        onClick={() => signIn()}
        className="bg-orange-500 px-3 py-1 mt-4 rounded text-white"
      >
        Sign in
      </button>
    </div>
  );
}

