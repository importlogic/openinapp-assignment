'use client';

import { SessionProvider } from 'next-auth/react';

export default function Providers(props) {
    return <SessionProvider>{props.children}</SessionProvider>;
}
