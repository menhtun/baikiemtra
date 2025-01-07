import "./App.css";
import ProductList from "./component/ProductList";
import AddProducts from "./component/AddProducts";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path={"/products"} element={<AddProducts />}></Route>
				<Route path="/" element={<ProductList />}></Route>
			</Routes>
		</>
	);
}

export default App;