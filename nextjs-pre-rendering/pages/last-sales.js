import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  const fetcher = (...args) =>
    fetch(...args)
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((data) => {
        setSales(data.content);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });

  const { error } = useSWR("http://172.21.64.1:8080/sales", fetcher);

  /*
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  */

  if (error) {
    return <p>Failed to load.</p>;
  }

  console.log("sales: ", sales);

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      <h1>Last Sales</h1>

      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://172.21.64.1:8080/sales");
  const data = await response.json();

  // dev confuration
  //return { props: { sales: data.content }, revalidate: 10 };
  return { props: { sales: data.content } };
}

export default LastSalesPage;
