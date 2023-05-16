import App from "../components/App";
function HomePage(props) {
  const { products } = props;

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product AA 1" }],
    },
  };
}

export default HomePage;
