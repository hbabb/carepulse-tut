import Logo from "@/assets/icons/logo-full.svg";
import Onboarding from "@/assets/images/onboarding-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* {isAdmin && <PasskeyModal />} */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src={Logo} height={1000} width={1000} alt="patient" className="mb-12 h-10 w-fit" />

          {/* <PatientForm /> */}

          <div className="regular mt-20 flex justify-between text-14">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; {new Date().getFullYear()} CarePulse by Heath Babb | Design by JavaScript
              Mastery
            </p>
            <Link href="/?admin=true" className="text-green-500 hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={Onboarding}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
