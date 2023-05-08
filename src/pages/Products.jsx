import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setValue] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();
  const limit = 2;
  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [page]);

  useEffect(() => {
    let paramsOBJ = { page };
    setSearchParams(paramsOBJ);
  }, [page]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          width: "80%",
          gap: "20px",
        }}
      >
        {data?.map((item, i) => {
          return (
            <div key={i}>
              <img style={{ height: "200px" }} src={item.image} alt="" />
              <h2>{item.title}</h2>
              <h2>{item.price}</h2>
            </div>
          );
        })}
      </div>
      <button disabled={page === 1} onClick={() => setValue(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => setValue(page + 1)}>Next</button>
    </div>
  );
};

export default Products;
