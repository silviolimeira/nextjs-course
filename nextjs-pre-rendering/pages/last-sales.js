import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
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

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Failed to load.</p>;
  }

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

export default LastSalesPage;
