import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc, createTRPCClient } from './trpc.ts'; // Импорт из вашего файла
import App from './App.tsx';

const queryClient = new QueryClient();
const trpcClient = createTRPCClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </trpc.Provider>
    </React.StrictMode>
);