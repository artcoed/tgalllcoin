import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@server/trpc/router'; // Ensure this path is correct

// Create the tRPC React client
export const trpc = createTRPCReact<AppRouter>();

// Create the tRPC client configuration
export const createTRPCClient = () => {
    return trpc.createClient({
        links: [
            httpBatchLink({
                url: 'http://localhost:3000/', // Ensure this matches your server
            }),
        ],
    });
};