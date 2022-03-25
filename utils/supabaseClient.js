import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("supabaseUrl: ", supabaseUrl);
console.log("supabaseAnonKey: ", supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("just called createClient...");
console.log("type of supabase: ", typeof supabase);
console.log("supabase: ", supabase);
