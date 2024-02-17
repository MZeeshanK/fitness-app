import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home";
import Benifits from "./scenes/Benifits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState(false);

  useEffect(() => {
    // Handling Navbar background change after scroll
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
