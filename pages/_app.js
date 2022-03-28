import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    // Step 1. subscribe to onAuthStateChange
    // Step 2. update authentication cookie on server
    // Step 3. add a wrapper component for ServerSideProps to check for supabase auth cookie
    // and do the redirection

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                updateSupabaseCookie(event, session);
            }
        );
        return () => {
            authListener?.unsubscribe();
        };
    });

    async function updateSupabaseCookie(event, session) {
        let apiUrl = "/api/auth/set";
        if (event === "SIGNED_OUT") {
            apiUrl = "/api/auth/remove";
        }
        await fetch(apiUrl, {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
        });
    }

    return (
        <PlasmicRootProvider>
            <Component {...pageProps} />
        </PlasmicRootProvider>
    );
}

export default MyApp;
