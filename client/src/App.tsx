import React from 'react';
import { trpc } from './trpc.ts';

const App: React.FC = () => {
    // Пример запроса (query)
    const { data, isLoading, error } = trpc.listBots.useQuery();

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div>
            <p>Данные: {JSON.stringify(data)}</p>
        </div>
    );
};

export default App;