import HomeImg from "../../Assets/homeHeader.jpg";

function Header() {
  return (
    <header className="h-70vh  homeHedaerContainer">
      <img className="w-full h-auto" src={HomeImg} alt="" />
    </header>
  );
}

export default Header