"use client";
import Divider from '@mui/material/Divider';
import AppAppBar from "./AppAppBar";
import Hero from "./Hero";
import LogoCollection from "./LogoCollection";
import Features from "./Features";
import Testimonials from './Testimonials';
import Highlights from './Highlights';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';

export default function MarketingPage() {
  return (
    <div>
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}