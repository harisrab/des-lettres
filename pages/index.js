import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// Component Imports
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Common/Header";
import Logo from "../components/Logo/Logo";
import HeroSection from "../components/MainPage/HeroSection";
import SummaryCatalogue from "../components/MainPage/SummaryCatalogue";
import Footer from "../components/Common/Footer";

export default function Home() {
	return (
		<div className="bg-black h-auto flex flex-col items-center">
			<HiddenHeader />
			<Header />

			{/* Hero Section Main Page */}
			<HeroSection />

			{/* Essays Letters Catalogue */}
			<SummaryCatalogue linkTitle="On Self" />
			<SummaryCatalogue linkTitle="Tenets" />
			<SummaryCatalogue linkTitle="Justice and Society" />
			<SummaryCatalogue linkTitle="Statecraft" />
			<SummaryCatalogue linkTitle="Stratagems" />

			{/* Footer */}
			<Footer />
		</div>
	);
}
