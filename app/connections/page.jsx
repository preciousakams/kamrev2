import { createClient } from '@/utils/supabase/server'

export default async function ConnectionsPage() {
const supabase = await createClient() 
const { data, error } = await supabase.auth.getSession() 
console.log('Session data:', data) 
console.log('Session error:', error)

       return (
        <div>
            <div>Connections and Brand voice</div>
        </div>
    );
}
