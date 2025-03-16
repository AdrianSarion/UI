import React from "react";
import { motion } from "framer-motion";
import {
  GiftIcon,
  OnesIcon,
  OneWhiteIcon,
  TransactionIcon,
} from "../../components/assets/icons";
import Image from "next/image";
import BeautyButton from "../../components/common/BeautyButton";

export function Card({ children, className = "" }) {
  return (
    <motion.div
      className={`rounded-lg shadow-lg border border-gray-700 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children, className = "p-6" }) {
  return <div className={className}>{children}</div>;
}

export default function SliceFi() {
  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <div className="relative text-left py-20 xl:px-[208px] md:px-[100px] px-[25px]">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            SLICEFI Coin
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            The utility token powering the future of decentralized finance.
          </p>
          <BeautyButton className="mt-10 py-[14px[ px-[32px]">Buy SLICEFI ➜</BeautyButton>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>

      {/* Features Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-12">
        <h2 className="text-center text-2xl font-semibold">
          The Power of SLICEFI
        </h2>
        <div className="mt-6 grid xl:grid-cols-3 gap-6">
          {[
            {
              title: "Multi-Asset Investment",
              desc: "Use SLICEFI to invest in real estate, stocks, and digital assets.",
              icon: OnesIcon,
            },
            {
              title: "Transaction Currency",
              desc: "Pay platform fees and transfer value seamlessly.",
              icon: TransactionIcon,
            },
            {
              title: "Rewards & Benefits",
              desc: "Earn staking rewards and exclusive membership perks.",
              icon: GiftIcon,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="relative w-[100/3%] text-white p-6 flex flex-col rounded-lg border border-[#09090B] bg-gradient-to-br from-[#09090B] via-[#09090B] to-[rgba(109,81,251,0.50)]"
            >
              <Image
                src={item.icon}
                width={64}
                height={64}
                alt={item.title}
              ></Image>
              <div className="mt-[20px]">
                <h3 className="text-[#E6E6F4] text-[20px] font-semibold leading-[28px]">
                  {item.title}
                </h3>
                <p className="text-[#B0B0DD] text-[15px] font-normal leading-[24px] mt-2">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Staking & Rewards Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Staking & Rewards</h2>
        <p className="text-gray-300 mt-2">
          Earn passive income by staking your SLICEFI tokens and becoming part
          of our governance system.
        </p>
        <ul className="list-disc ml-6 mt-4 text-gray-400">
          <li>Minimum stake: 1,000 SLICEFI</li>
          <li>Annual rewards up to 12% APY</li>
        </ul>
      </div>

      {/* Platinum Membership Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
          <h2 className="text-xl font-semibold text-purple-400">
            Platinum Membership
          </h2>
          <p className="text-gray-300 mt-2">
            Hold 100M SLICEFI ($100,000 equivalent) to unlock exclusive
            benefits:
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-400">
            <li>Dedicated account manager</li>
            <li>Free crypto credit card</li>
            <li>20% discount on platform fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
