import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundBeams className="aboslute inset-0" />
      <div className="relative z-10">
      <Header />
      <LandingPage />
      </div>
    </div>
  );
}
