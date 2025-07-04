import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const Footer = ({ hiddenPage }) => {
  const pathname = usePathname();
  const authorPages =
    pathname.startsWith("/author") || pathname.startsWith("/dashboard");

  return (
    <footer className={`${hiddenPage} bg-[#050A30]`}>
      <section className="bg-[#050A30] md:mx-5 px-6 md:px-20 py-10 text-white">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo & Socials */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={60}
                height={20}
                alt="itan logo"
                className="lg:w-12 -ml-2"
              />
            </Link>
            <div className="flex space-x-3 mt-2">
              <Link href="https://x.com/ItanGlobal" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-4 h-4 p-2 rounded-full border-2 border-[#EF5353] hover:bg-[#EF5353] transition-all"
                />
              </Link>
              <Link
                href="https://web.facebook.com/itanglobalpublishing/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-4 h-4 p-2 rounded-full border-2 border-[#EF5353] hover:bg-[#EF5353] transition-all"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/itan-global-publishing/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-4 h-4 p-2 rounded-full border-2 border-[#EF5353] hover:bg-[#EF5353] transition-all"
                />
              </Link>
              <Link
                href="https://www.instagram.com/itanglobalpublishing"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-4 h-4 p-2 rounded-full border-2 border-[#EF5353] hover:bg-[#EF5353] transition-all"
                />
              </Link>
            </div>
          </div>

          {/* Link Grid */}
         <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm font-semibold text-gray-300">
  <Link
    href="https://itanglobalpublishing.substack.com/"
    target="_blank"
    className="hover:text-[#EF5353]"
  >
    Cookie preferences
  </Link>
  <Link
    href="https://itanglobalpublishing.substack.com/"
    target="_blank"
    className="hover:text-[#EF5353]"
  >
    Newsletter
  </Link>
  <Link
    href="mailto:support@itan.app"
    target="_blank"
    className="hover:text-[#EF5353]"
  >
    FAQ
  </Link>
  <Link
    href="#"
    target="_blank"
    className="hover:text-[#EF5353]"
  >
    Publish with IGP
  </Link>
  <Link
    href="#"
    target="_blank"
    className="hover:text-[#EF5353]"
  >
    Contact Us
  </Link>
</div>

        </div>

        {/* Divider */}
        <div className="mt-8">
          <span className="block h-[2px] w-full bg-[#EF5353]/30"></span>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm mt-6">
          <div className="space-x-4 mb-2">
            <Link
              href="/terms&conditions"
              target="_blank"
              className="hover:text-[#EF5353]"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policies"
              target="_blank"
              className="hover:text-[#EF5353]"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-[13px] md:text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
            ITAN Technologies Ltd. © 2025. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
