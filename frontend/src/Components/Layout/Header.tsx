// import HomeImg from "../../Assets/homeHeader.jpg";

interface HeaderProps {
  className: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({className, title}) => {
  return (
    <header
      className={`${className} flex justify-center items-center w-full h-screen bg-cover bg-bottom bg-no-repeat homeHedaerContainer`}
    >
      {/* <img className="w-full h-auto" src={HomeImg} alt="" /> */}
      <h1 className="text-white text-9xl font-caveat">{title}</h1>
    </header>
  );
};

export default Header