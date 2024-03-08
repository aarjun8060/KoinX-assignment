"use client";
import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Image from "next/image";

const GliderCarousel = ({ carousalData }) => {
  return (
    <div>
      <Glider hasArrows slidesToShow={5} slidesToScroll={1} scrollLock>
        {carousalData &&
          carousalData.length > 0 &&
          carousalData.map((data) => (
            <div key={data} className="ml-2 gap-5 border rounded-xl h-[160px] w-[250px] flex flex-col justify-center items-center">
              <div className="flex justify-start items-center gap-2 w-11/12 mt-1">
                <Image src={data?.item?.small} alt="" width={30} height={30} />
                <div className="items-center text-center">{data?.item?.symbol}</div>
                <div className="bg-green-100 text-green-500 flex rounded-md text-xs text-end mt-2 h-fit">
                  {data?.item?.data?.price_change_percentage_24h?.inr.toFixed(
                    2
                  )}
                  %
                </div>
              </div>
              <div className="w-11/12">
              <h4 className="flex justify-start items-center text-xl font-semibold">
                {data?.item?.data?.price}
              </h4>
              </div>
              <div className="flex justify-center items-center w-11/12 mb-2">
                <Image
                  src={data?.item?.data?.sparkline}
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ))}
      </Glider>
      
    </div>
  );
};

export default GliderCarousel;
