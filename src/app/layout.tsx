import Footer from './components/footer';
import Header from './components/header';
import './global.css';
import { aboutMeData, pages, contactMeLinks } from '../data/fakeData';

export const metadata = {
  title: 'Portafolio',
  description: 'Basic portafolio for developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header aboutMeData={aboutMeData} pages={pages} />
        {children}
        <Footer contactMeLinks={contactMeLinks} />
      </body>
    </html>
  );
}
