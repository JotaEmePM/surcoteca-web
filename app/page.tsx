import DiskSection from "@/components/disk-section";
import PromoCarousel from "@/components/promo-carousel";

export default function Home() {
  return (    
    <>
    <div className="hidden md:block">
      <PromoCarousel/>
    </div>
    <div>
      <DiskSection  />
    </div>
    </>
  );
}
