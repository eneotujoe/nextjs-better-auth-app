"use client"

import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { Suspense } from 'react';

function LoadingSpinner() {
  return <p>Loading verification details...</p>;
}

export default function ResetPasswordPage() {

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <ResetPasswordForm />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
