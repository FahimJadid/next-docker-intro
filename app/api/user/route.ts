import { NextRequest, NextResponse } from "next/server";
import prisma from '@/db';


export async function POST(req: NextRequest) {
    const body = await req.json();
    const {username, password} = body
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}