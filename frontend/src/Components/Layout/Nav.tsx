import logo from "../../Assets/logo.png"


function Nav() {
  const menuItems: string[] = [
    "Home",
    "About",
    "Destinations",
    "Blog",
    "Travel Tips",
  ];
  return (
    <nav className="bg-black">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="p-5 logoContainer">
            <img src={logo} alt="Travels with Drea Logo" />
          </div>
          {/* MENU */}
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li className="text-gray-300 text-xl font-semibold" key={index}>
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
