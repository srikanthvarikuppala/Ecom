import axios from "axios";
import React, { useEffect, useState } from "react";
import { UseCart } from "./Context";
import { NavLink } from "react-router-dom";
import UserDetailes from "./components/UserDetailes";

const Ecom = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ status: false, msg: "" });
  //const [search, setSearch] = useState("");
  //const [searchButton, setSearchButton] = useState(false);
  const { addToCart } = UseCart();
  const fetchData = async () => {
    setLoading(true);
    setError({ status: false, msg: "somthing went wrong" });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = await setData(response.data.products);
      setLoading(false);
      setError({ status: false, msg: "somthing went wrong" });
    } catch (error) {
      setLoading(false);
      setError({ status: true, msg: "somthing went wrong" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const handelCart = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    if (selectedItem) {
      addToCart(selectedItem);
      alert(`Added ${selectedItem?.title} to cart`);
    }
  };

  //   const filterSearch= data.filter((user)=>{
  //     return(user.title.toLowerCase().includes(search.toLowerCase()))
  //   })
  return (
    <div>
      <container className="container">
        {
          // (searchButton && filterSearch.length===0)?(<h3>Data not found</h3>):(
          data.map((props) => {
            const { id, title, images, description } = props;
            return (
              <div key={id} className="box">
                <h2>{title}</h2>
                <img
                  src={images[0] || images[1]}
                  alt={title}
                  style={{ height: "10rem", width: "10rem" }}
                />
                <p>{description}</p>

                <NavLink to={`./${id}`}>
                  <button className="btn btn-dark">BUY NOW</button>
                </NavLink>

                <br />
                <button onClick={() => handelCart(id)} className="btn btn-dark">
                  {" "}
                  ADD TO CART{" "}
                </button>
              </div>
            );
          })
        }
      </container>
    </div>
  );
};

export default Ecom;
