import React from "react";
import NavbarOne from "../../../ReusableComponents/Navbar/navbar1";

export default function navbarBasic() {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/" },
    { title: "About", url: "/" },
  ];
  const brandName = "Portfolio";
  return <NavbarOne navItems={navItems} brandName={brandName} />;
}
