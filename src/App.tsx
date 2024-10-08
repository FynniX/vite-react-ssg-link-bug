import type { RouteRecord } from 'vite-react-ssg'
import {A} from "./pages/a.tsx";
import {B} from "./pages/b.tsx";

export const routes: RouteRecord[] = [
    {
        path: 'a',
        element: <A />,
    },
    {
        path: 'b',
        element: <B />,
    },
]