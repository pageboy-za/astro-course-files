import type { APIRoute } from "astro";
import { Book, db, eq } from "astro:db";

export const PATCH: APIRoute = async ({ request, params }) => {
  const { id } = params;
  const data = await request.json();

  try {
    if (!data || !data.status || !id) {
      throw new Error("No book selected");
    }

    const dbData = await db
      .update(Book)
      .set({
        status: data.status,
      })
      .where(eq(Book.id, id));

    return new Response(
      JSON.stringify({
        data: dbData,
        error: null,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        data: null,
        error: error instanceof Error ? error.message : error,
      })
    );
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;

  try {
    if (!id) {
      throw new Error("No book selected");
    }

    const dbData = await db.delete(Book).where(eq(Book.id, id));

    return new Response(
      JSON.stringify({
        data: dbData,
        error: null,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        data: null,
        error: error instanceof Error ? error.message : error,
      })
    );
  }
};
