import { useTRPC } from "@/integrations/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const trpc = useTRPC()

  const query = useQuery(trpc.people.list.queryOptions());
  return (
    <div className="bg-primary">
    </div>
  );
}
