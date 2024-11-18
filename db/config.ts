import { column, defineDb, defineTable } from "astro:db";

const Book = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    author: column.json(),
    cover: column.text(),
    status: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Book },
});
