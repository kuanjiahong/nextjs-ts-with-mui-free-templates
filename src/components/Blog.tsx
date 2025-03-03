"use client";
import Container from '@mui/material/Container';
import AppAppBar from './AppAppBar';
import MainContent from './MainContent';
import Latest from './Latest';
import Footer from './Footer';

export default function Blog() {
  return (
    <>
    <AppAppBar />
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
    >
      <MainContent />
      <Latest />
    </Container>
    <Footer />
    </>
  );
}
