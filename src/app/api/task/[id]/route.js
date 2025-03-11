import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";



export async function GET(request, { params }) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const { id } = await params;

  const { title, description } = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  const { id } = params; // No necesitas await en params

  let taskRemoved; // ✅ Definir taskRemoved antes del try-catch

  try {
    taskRemoved = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    console.log(taskRemoved);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(taskRemoved); // ✅ Ahora siempre está definido
}
