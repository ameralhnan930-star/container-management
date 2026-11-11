import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://uqbjypuolwiipwijueqz.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WcqO1MnvUhysGVWdZh6i1w_89RkIdy9";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
