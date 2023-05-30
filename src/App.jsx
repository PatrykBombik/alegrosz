import { useState } from "react";

function App() {
    const [products, setProducts] = useState([]);

    return (
        <>
            <h1>AleGrosz!</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
