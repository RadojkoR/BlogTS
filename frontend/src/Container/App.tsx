import { Nav, Header, Footer } from '../Components/Layout';
import '../Styles/App.scss';

function App() {

  return (
    <>
      <Nav />
      <Header />
      <h1 className="text-3xl font-bold underline">
        Travels with Drea App.tsx
      </h1>
      <Footer />
    </>
  );
}

export default App
