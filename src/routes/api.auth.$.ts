import { auth } from "@/lib/auth";
import {
  createAPIFileRoute,
  type StartAPIMethodCallback,
} from "@tanstack/react-start/api";
const handleRequest: StartAPIMethodCallback<"/api/auth/$"> = async ({
  request,
}) => {
  return auth.handler(request);
};

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: handleRequest,
  POST: handleRequest,
});
