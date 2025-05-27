import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
 
export const authClient =  createAuthClient({})

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  sendVerificationEmail,
  verifyEmail,
  forgetPassword,
  resetPassword,
} = authClient

export const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard", 
  })
}