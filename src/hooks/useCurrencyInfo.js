// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const [data,setData]= useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//     } ,[currency])
//     return data;
// }
// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchCurrency = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await response.json();

        if (json && json[currency]) {
          setData(json[currency]);
        } else {
          console.warn("Currency data not found:", currency);
          setData({});
        }
      } catch (error) {
        console.error("Failed to fetch currency info:", error);
        setData({});
      }
    };

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
