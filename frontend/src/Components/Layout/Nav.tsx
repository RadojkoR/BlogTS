import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png"


function Nav() {
  const menuItems: string[] = [
    "About",
    "Destinations",
    "Blog",
    "Travel Tips",
  ];
  return (
    <nav className="bg-black fixed w-full top-0 left-0">
      <div className="mx-auto px-2 py-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="p-5 logoContainer">
            <NavLink to="/">
              <img src={logo} alt="Travels with Drea Logo" />
            </NavLink>
          </div>
          {/* MENU */}
          <ul className="flex space-x-4 me-16">
            <li className="text-gray-300 text-xl font-semibold">
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            {menuItems.map((item, index) => (
              <li className="text-gray-300 text-xl font-semibold" key={index}>
                <NavLink to={`/${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
