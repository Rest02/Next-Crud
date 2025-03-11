"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Bruno_Ace } from "next/font/google";

function NewPage() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");


  useEffect(() => {
    if (params.id) {
      fetch("http://localhost:3000/api/task/" + Number(params.id))
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDesription(data.description);
        });
    }
  }, []);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(
        "http://localhost:3000/api/task/" + Number(params.id),
        {
          method: "PUT",
          body: JSON.stringify({ title, description }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action=""
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black bg-white"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black bg-white"
          placeholder="Describe tu tarea"
          onChange={(e) => setDesription(e.target.value)}
          value={description}
        ></textarea>

        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Crear
          </button>

          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded ml-4 "
              type="button"
              onClick={async () => {
                const res = await fetch(
                  `http://localhost:3000/api/task/${params.id}`,
                  {
                    method: "DELETE",
                  }
                );
                const data = res.json();
                router.refresh
                router.push("/")
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPage;
