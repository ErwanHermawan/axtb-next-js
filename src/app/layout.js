// -- style
import "@style/app.scss";

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
