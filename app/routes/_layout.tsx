import { defineLayout } from "$fresh/server.ts";

const navCss = 'font-semibold hover:bg-gray-300 py-1 px-2 transition duration-150 rounded-md mr-6 last:mr-0';

export default defineLayout((_request, context) => {
    return (
        <>
            <div className="container mx-auto">
                <nav class="py-4 border-b border-gray-300 mb-6 flex items-center">
                    <a href="/" class="mr-12 font-semibold text-xl font-raleway">Deno Login Example</a>

                    <a href="/" class={navCss}>Home</a>
                    <a href="/protected" class={navCss}>Protected</a>

                    <a href="/login" class="font-black text-gray-500 ml-auto uppercase">Login</a>
                </nav>

                <context.Component />
            </div>
        </>
    );
});
