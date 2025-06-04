import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
    component: Home
})

 function Home() {

    const handleLogin = async () => {
    await signIn.social({
        provider: "google",
        
    })
    }
    return (
        <div>
            <Button onClick={handleLogin}>
                Login
            </Button>
        </div>
    )
}