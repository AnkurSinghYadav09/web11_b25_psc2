import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Products" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
  ];

  return (
    <div>
      {links.map((e) => {
        return (
          <Link style={{ marginLeft: "20px" }} key={e.path} to={e.path}>
            {e.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
