import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {

    let cookie = request.cookies.get('courseraJWT');

    if (!cookie) {   //if courseraJWT not found on client and user does not have access to addcourse and /course/:courseId that means user is not logged in, redirect to sign in
        return NextResponse.redirect(new URL('/signin', request.url));
    }
}

export const config = {
    matcher: ['/addcourse', '/course/:path*'],
};
