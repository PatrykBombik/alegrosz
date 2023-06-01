import ProductCard from "./ProductCard.jsx";
import PropTypes from "prop-types";

function ProductList({ products, search, sortByPrice }) {
    return (
        <>
            {products
                .filter((product) =>
                    `${product.name} ${product.description}`
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .sort((a, b) => {
                    // if (sortByPrice === 1) {
                    //     return a.price - b.price;
                    // } else if (sortByPrice === 2) {
                    //     return b.price - a.price;
                    // }
                    // return 0;
                    switch (sortByPrice) {
                        case "asc":
                            return a.price - b.price;
                        case "dsc":
                            return b.price - a.price;
                        default:
                            return 0;
                    }
                })
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    sortByPrice: PropTypes.number.isRequired,
};

export default ProductList;
