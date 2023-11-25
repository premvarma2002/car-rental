"use client";
import Image from "next/image";
import { useState } from "react";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

const carRent = calculateCarRent(city_mpg,year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        <span className="self-start text-[14px] font-semibold">{carRent}</span>
        <span className="self-start text-[14px] font-semibold">/day</span>
      </p>
    </div>
  );
};

export default CarCard;
