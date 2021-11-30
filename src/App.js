/** @format */

import "./App.css";
import BookMark from "./Components/BookMark";
import Extension from "./Components/Extension";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Questions from "./Components/Questions";

function App() {
  return (
    <div className="App">
      <Header />
      <BookMark />
      <Features />
      <Extension />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
