// import Appbar from "@/components/Appbar";
import Banner from "@/components/Banner";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Banner />
        {/* <Appbar className="mt-20 sm:mt-14 md:mt-8 lg:mt-8" /> Apply margin-top for all screens */}
        {children}
    </>
    
  );
}
