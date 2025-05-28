'use client';

import { LoginForm } from '@/components/auth/login-form';
import { SignUpForm } from '@/components/auth/signup-form';
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Oauth } from '@/components/auth/oauth';

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"


export default function LoginPage() {
    
  return (
    <div className="flex h-dvh w-screen items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col">
        <div className="flex flex-col m-3">
          <Card>
            <CardContent>
              <Tabs defaultValue="login">
                <CardHeader className="text-center">
                  <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login" className='font-bold'>Login</TabsTrigger>
                      <TabsTrigger value="signup" className='font-bold'>Sign Up</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <TabsContent value="login">
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="flex flex-col gap-4">
                        <Oauth />
                      </div>
                      <LoginForm />
                    </div>
                  </CardContent>
                </TabsContent>
                <TabsContent value="signup">
                  <CardContent className="space-y-2">
                    <div className="grid gap-6">
                      <div className="flex flex-col gap-4">
                        <Oauth />
                      </div>
                      <SignUpForm />
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div> */}
        </div>
      </div>
    </div>
  );
}
