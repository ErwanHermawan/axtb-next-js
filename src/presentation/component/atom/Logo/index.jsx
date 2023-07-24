import Image from "next/image";

const Logo = (props) => {
	const { filename, name } = props;

	return <Image {...props} src={`asset/image/logo/${filename}`} alt={name} />;
};

export default Logo;
