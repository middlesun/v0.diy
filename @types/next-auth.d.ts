// next-auth.d.ts
import NextAuth, { type DefaultSession, type DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    imageUrl?: string;
    username?: string;
  }

  interface Session {
    user: {
      id: string;
      imageUrl?: string;
      username?: string;
    } & DefaultSession['user'];
  }
}
