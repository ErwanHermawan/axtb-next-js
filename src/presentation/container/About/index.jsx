// --- components
import Default from "@template/Default";
import HeroBanner from "@organism/HeroBanner";

// --- datas
import BannerData from "./BannerData";

const About = () => {
	return (
		<>
			<Default page="about">
				<HeroBanner page="about" data={BannerData} />
			</Default>
		</>
	);
};

export default About;
