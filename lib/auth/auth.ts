import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db/drizzle";
import { nextCookies } from "better-auth/next-js";
import { schema } from "../db/schema";


export const auth = betterAuth({
    // baseURL: process.env.BASE_URL,
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema
    }),

    emailAndPassword: {  
        enabled: true,
        // autoSignIn: false,
        sendResetPassword: async ({ user, url }) => {
            // In production, replace with actual email service
            // console.log(`Password reset for ${user.email}: ${url}`)
        },
    },

    socialProviders: {
        google: {
            prompt: "select_account", 
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },

    plugins: [nextCookies()],

});