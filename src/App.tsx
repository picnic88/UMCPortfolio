import "./App.css";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomeLayout from "./Layouts/HomeLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MyMovieLog from "./pages/MyMovieLog";
import PrjDetail from "./pages/PrjDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "my", element: <MyMovieLog /> },
      { path: "my/detail", element: <PrjDetail /> },
      { path: "my/detail/:id", element: <PrjDetail /> },
    ],
  }
]);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
