import { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData); // Log the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
        {data.message && <img src={data.message} alt="Random Dog" />}
        <br />
        <hr />
    </div>

  );
};

export default DataFetcher;
