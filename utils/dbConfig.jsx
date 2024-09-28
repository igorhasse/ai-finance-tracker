import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://finan-smart_owner:5KN6IeZJcqCs@ep-still-forest-a407q440.us-east-1.aws.neon.tech/finan-smart?sslmode=require"
);

console.log(sql);

export const db = drizzle(sql, { schema });
