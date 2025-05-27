"use client"

import { Suspense } from 'react';
import { VerifyEmailForm } from '@/components/auth/verify-email-form';

function LoadingSpinner() {
  return <p>Loading verification details...</p>;
}

export default function VerifyEmailPage() {

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <VerifyEmailForm />
      </Suspense>
    </div>
  )
}
