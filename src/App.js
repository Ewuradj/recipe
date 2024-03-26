import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import AddRecipe from "./pages/add-recipe";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  {path:"/recipes", element: <Recipe/>},
  {path: "/recipes/:id", element: <Recipe/>},
  {path: "/add-recipe", element: <AddRecipe/>}
]);

function App() {
  return  <RouterProvider router={router}/>;
   
}

export default App;
