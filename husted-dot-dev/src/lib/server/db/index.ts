// src/lib/server/db/index.ts
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import type { Sql } from 'postgres';
import * as schema from './schema.js';
import { env } from '$env/dynamic/private';

type Database = PostgresJsDatabase<typeof schema> & { $client: Sql };

export let db: Database | null = null;

if (typeof process !== 'undefined' && env.DATABASE_URL?.startsWith('postgres://')) {
    try {
        const client = postgres(env.DATABASE_URL);
        db = drizzle(client, { schema });
    } catch (err) {
        console.warn('Failed to initialize DB client:', err instanceof Error ? err.message : err);
    }
}
