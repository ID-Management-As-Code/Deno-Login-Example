import { Options } from "$fresh/plugins/twind.ts";

export default {
    selfURL: import.meta.url,
    theme: {
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif']
            }
        }
    }
} as Options;
