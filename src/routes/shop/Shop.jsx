import { ProductsContext } from "../../contexts/products.context";
import { Fragment, useContext, useState } from "react";
import "./shop.styles.css";
import ProductList from "./ProductList";

function Shop() {
  const { products } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  function searchButton(e) {
    e.preventDefault();
    const searchInput = e.target.querySelector('input[type="text"]');
    const searchInputValue = searchInput.value;

    if (searchInputValue == "") {
      setFilteredProducts(products);
    } else {
      const filteredArray = products.filter((product) =>
        product.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      if (filteredArray.length == 0) {
        alert(`There is no element named ${searchInputValue}`);
      } else {
        setFilteredProducts(filteredArray);
      }
    }
  }
  return (
    <div className="shop-page">
      <div className="search-bar">
        <form onSubmit={searchButton}>
          <input type="text" />
          <button type="submit" className="search-bar-button">
            Go
          </button>
        </form>
      </div>

      <div className="product-cards">
        {filteredProducts.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Shop;
