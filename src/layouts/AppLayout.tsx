import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="antialiased">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}