import "./products-list.styles.css";

function ProductList({ product }) {
  const { title, price, image } = product;
  return (
    <div className="product-card-container">
      <img src={image} alt="" />
      <div className="product-card-footer">
        <span className="product-card-name">{title}</span>
        <span className="product-card-price">${price}</span>
      </div>
      <button className="buttonSite add-to-cart-button">Add to cart</button>
    </div>
  );
}
export default ProductList;
