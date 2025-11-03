import { LandingPage } from './riddle/useCases/seeLandingPage/LandingPage';
import { RiddlePage } from './riddle/useCases/seeRiddlePage/RiddlePage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/riddle/:riddleId',
        element: <RiddlePage />,
    },
    {
        path: '*',
        element: <main>404: Page not found</main>,
    },
];
