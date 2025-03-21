import { prisma } from "@/libs/prisma";
import TaskCard from '@/components/TaskCard'

async function loadTask() {
  return await prisma.task.findMany();
  
}

// export const revalidate = 0
export const dynamic = "force-dynamic";  // Asegúrate de usar 'force-dynamic' correctamente

async function HomePage() {
  const tasks = await loadTask();
  return <section className="container mx-auto">
    <div className="grid grid-cols-3 gap-3 mt-10">
    {tasks.map((task) =>(
      <TaskCard task = {task} key = {task.id}/>
    ))}
  </div>
  </section>
}

export default HomePage;
