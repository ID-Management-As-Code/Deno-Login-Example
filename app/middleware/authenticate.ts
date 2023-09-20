import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {

}

export const authenticate = async (request: Request, context: MiddlewareHandlerContext<State>) => {
    return await context.next();
};
