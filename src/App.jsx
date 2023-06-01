import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductSearch from "./components/ProductSearch.jsx";
import ProductList from "./components/ProductList.jsx";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSearchParams } from "react-router-dom";

function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortByPrice, setSortByPrice] = useState(
        searchParams.get("sortBy") || "none"
    );

    useEffect(() => {
        setSearchParams({ sortBy: sortByPrice });
    }, [sortByPrice]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    async function getProducts() {
        const response = await fetch("http://localhost:3000/products");
        return await response.json();
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Alegrosz</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <ProductSearch search={search} setSearch={setSearch} />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="sortByPrice">
                                Sort by price
                            </InputLabel>
                            <Select
                                labelId="sortByPrice"
                                id="sortByPrice"
                                value={sortByPrice}
                                label="Sort by price"
                                onChange={(event) =>
                                    setSortByPrice(event.target.value)
                                }
                            >
                                <MenuItem value={"none"}>---</MenuItem>
                                <MenuItem value={"asc"}>Ascending</MenuItem>
                                <MenuItem value={"dsc"}>Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                    >
                        <ProductList
                            products={products}
                            search={search}
                            sortByPrice={sortByPrice}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
