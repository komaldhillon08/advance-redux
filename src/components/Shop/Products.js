import ProductItem from './ProductItem';
import classes from './Products.module.css';



const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: 'This is a first product - amazing!',
  },
  {
    id: "p2",
    price: 8,
    title: "my second book",
    description: 'This is a second product - amazing!',
  },
  {
    id: "p3",
    price: 5,
    title: "my third book",
    description: 'This is a third product - amazing!',
  }

]

const Products = (props) => {

  return (
    <section className={classes.product}>
      {/* <h2>Buy your favorite products</h2> */}
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
          />
          
        ))}

      </ul>
    </section>
  );
};

export default Products;
