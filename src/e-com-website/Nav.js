import React from "react";
import Links from "./Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UseCart } from "./Context";
const Nav = () => {
  // const handelSearch=(event)=>{
  //     if( setSearchButton){
  //       setSearch(event.target.value)
  //         setSearchButton(false)}
  //     }
  //     const handelButton=()=>{
  //         setSearchButton(true)
  //     }
  const handelCart = () => {
    //console.log(cartItems);
  };
  const { cartItems } = UseCart();
  return (
    <div>
      <nav
        style={{
          background: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            background: "#2874f0",
            alignItems: "center",
            padding: "11px 0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
              alt="Flipcart logo"
            />
            <a
              style={{
                marginLeft: "65px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Explore<span style={{ color: "yellow" }}> Plus </span>
              <img
                width="10"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt="plus logo"
              />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              background: "white",
              outline: "none",
              border: "none",
              borderRadius: "10px",
            }}
          >
            {/* <input type="text" placeholder="Search..." value={search} onChange={handelSearch} /> */}
            <input type="text" placeholder="Search..." />
            <button
              type="submit"
              //   onClick={handelButton}
              style={{
                background: "white",
                cursor: "pointer",
                outline: "none",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                beat
                style={{ color: "#225fc9", fontSize: "20px" }}
              />
            </button>
          </div>

          <Links />
          <div style={{ position: "relative" }} onClick={handelCart()}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span
              style={{
                position: "absolute",
                background: "white",
                top: "-15px",
                width: "19px",
                borderRadius: "50%",
              }}
            >
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
