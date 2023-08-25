import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserDetailes = () => {
  const { id } = useParams();

  const [productList, setProductlist] = useState([]);

  useEffect(() => {
    const Product = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      setProductlist(await response.json());
    };
    Product();
  }, [id]);

  return (
    <div>
      {productList ? (
        <div className="container">
          <div className="col-md-6">
            <img
              src={productList.images}
              alt={productList.title}
              width={"400px"}
              height={"400px"}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase text-black-50">
              {productList.category}
            </h3>
            <h1 className="display-5">{productList.title}</h1>
            <p className="lead fw-bolder">
              Rating:- {productList.rating}
              <i class="fa fa-star" aria-hidden="true"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
              Price: {productList.price}$
            </h3>
            <p className="lead"></p>
            <button type="submit" class="btn btn-outline-dark">
              Add To Cart
            </button>
            <NavLink
              to="/cart"
              type="button"
              class="btn btn-outline-dark ms-2 px-3 py-2"
            >
              Go To Cart
            </NavLink>
          </div>
          {/* Render other details of productDetails here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailes;
