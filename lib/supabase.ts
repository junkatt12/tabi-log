import { createClient } from '@supabase/supabase-js'

// TODO: Set these via env or config for your project.
// For MVP simplicity you may inline temporarily, but prefer env in real usage.
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
