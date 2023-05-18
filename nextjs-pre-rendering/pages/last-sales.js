import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://172.21.64.1:8080/sales")
      .then((response) => response.json())
      .then((data) => {
        setSales(data.content);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
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
