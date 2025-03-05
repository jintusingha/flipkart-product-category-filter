import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Navbar on Product Listing Page
  const hideNavbar = location.pathname === "/products";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
