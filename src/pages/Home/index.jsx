import Banner from "../../components/CommonComponent/Banner";
import Footer from "../../components/CommonComponent/Footer";
import Navbar from "../../components/CommonComponent/Navbar";
import AboutOurWebsite from "../../components/Home/AboutOutWebsite";
import BestSellProducts from "../../components/Home/BestSellProducts";
import OurTeamMembers from "../../components/Home/OurTeamMembers";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* footer */}
      <Footer />
      {/* Banner */}
      <Banner />
      {/* BestSellProducts */}
      <BestSellProducts />
      {/* AboutOurWebsite */}
      <AboutOurWebsite />
      {/* OurTeamMembers */}
      <OurTeamMembers />
    </div>
  );
};
export default Home;
