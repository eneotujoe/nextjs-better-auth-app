import { useActionState, useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { GoogleIcon } from '../icons';
import { googleSignIn } from '@/lib/auth/auth-client';

export function Oauth() {

  return (
    <section className="flex flex-col gap-6">
      <div className="flex mt-4">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={ googleSignIn }
        >
          <GoogleIcon />
          Continue with Google
        </Button>
      </div>

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-card px-2 text-muted-foreground">
          Or conntiue with email
        </span>
      </div>
    </section>
  );
}
