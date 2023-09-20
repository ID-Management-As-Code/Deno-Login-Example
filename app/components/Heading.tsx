import type { ComponentChildren } from 'preact';
import { joinCss } from '~utilities';

type HeadingSize = '1' | '2' | '3' | '4' | '5' | '6';

interface Properties {
    children: ComponentChildren;
    class?: string;
    size: HeadingSize;
}

function getSize(size: HeadingSize) {
    switch (size) {
        case '1': return 'text-6xl mb-6';
        case '2': return 'text-5xl mb-6';
        case '3': return 'text-4xl mb-4';
        case '4': return 'text-3xl mb-4';
        case '5': return 'text-2xl mb-2';
        case '6': return 'text-xl mb-2';
    }
}

export const Heading = ({ children, class: className, size }: Properties) => {
    const css = joinCss(
        'font-semibold font-raleway',
        getSize(size),
        className
    );

    switch (size) {
        case '1': return <h1 class={css}>{children}</h1>;
        case '2': return <h2 class={css}>{children}</h2>;
        case '3': return <h3 class={css}>{children}</h3>;
        case '4': return <h4 class={css}>{children}</h4>;
        case '5': return <h5 class={css}>{children}</h5>;
        case '6': return <h6 class={css}>{children}</h6>;
    }

    return null;
};
