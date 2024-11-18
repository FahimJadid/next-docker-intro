"use server"

import prisma from "@/db";

export async function signup(username: string, password: string) {
  // Zod Validation
  try { 
    const user = await prisma.user.create({
      data: {
        username,
        password,
      }
    })

    console.log(user.id);
    
    return { message: 'User created successfully', username: user.username };
  } catch (error) {
    console.error("Error in POST /api/user:", error);
    return { message: 'Internal Server Error' };
  }
}


