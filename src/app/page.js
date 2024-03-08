"use client";
import TradingViewWidget from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GliderCarousel from "@/components/glider-carousel";
import { Slider } from "@/components/ui/slider";
import { PieChart } from "react-minimal-pie-chart";
import { fundamentalData, sentimentData } from "@/constants/data";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const TabBlock = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
        <TabsTrigger value="new-insight">New Insights</TabsTrigger>
        <TabsTrigger value="sentiments">Sentimentals</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="technicals">Technicals</TabsTrigger>
        <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader className="text-xl font-semibold">Performance</CardHeader>
          <CardContent className="flex w-full md:w-11/12">
            <div className="text-gray-400 text-sm md:text-base">
              <p className="whitespace-nowrap ">Today s Low</p>
              <p>46930.22</p>
            </div>
            <Slider
              defaultValue={[48637.83]}
              max={49343.83}
              min={46930.22}
              step={1}
              className={"w-full md:w-11/12"}
            />
            <div className="text=gray-400 text-sm md:text-base">
              <p className="whitespace-nowrap ">Today s High</p>
              <p>49,343.83</p>
            </div>
          </CardContent>
          <CardContent className="flex w-full md:w-11/12">
            <div className="text-gray-400 text-sm md:text-base">
              <p className="whitespace-nowrap">52W Low</p>
              <p>16,930.22</p>
            </div>
            <Slider
              // defaultValue={[48637.83]}
              max={49343.83}
              min={16930.22}
              step={1}
              className={"w-full md:w-11/12"}
            />
            <div className="text=gray-400 text-sm md:text-base">
              <p className="whitespace-nowrap ">52W High</p>
              <p>49,743.83</p>
            </div>
          </CardContent>
          <CardHeader className="text-xl font-semibold">
            Fundamentals
          </CardHeader>
          <CardContent className="flex flex-wrap w-full md:w-11/12">
            {fundamentalData.map((funData) => (
              <div
                key={funData}
                className="w-full md:w-1/2 border-b-2 p-2 flex justify-between text-xl items-center"
              >
                <div className="text-gray-400 text-base">{funData.name}</div>
                <div className="font-medium text-sm">{funData.price}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="fundamentals">
        <Card>
          <CardHeader className="text-xl font-semibold">
            Fundamentals
          </CardHeader>
          <CardContent className="flex flex-wrap w-11/12">
            {fundamentalData.map((funData) => (
              <div
                key={funData}
                className="w-1/2 border-b-2 p-2 flex justify-between text-xl items-center"
              >
                <div className="text-gray-400 text-base">{funData.name}</div>
                <div className="font-medium text-sm">{funData.price}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="new-insight">
        <Card>
          <CardHeader className="text-xl font-semibold">New Insight</CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

const Sentiment = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    console.log("screenWifth",screenWidth)
    if (screenWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  return (
    <Card className="my-10 w-[95%] py-10">
      <CardHeader className="text-gray-800 text-2xl font-bold">
        Sentiment
      </CardHeader>
      <CardHeader className="text-gray-800 text-xl font-bold py-0">
        Key Events
      </CardHeader>
      <Glider
        hasArrows
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        scrollLock
        className="w-full"
      >
        {sentimentData.map((sentData) => (
          <div
            key={sentData.id}
            className={`p-3 flex odd:bg-blue-200 gap-5 even:bg-green-100 ml-5 rounded-lg`}
          >
            <div>
              <Image src={sentData.src} alt="" width={200} height={200} />
            </div>
            <div>
              <h4 className="font-semibold">{sentData.heading}</h4>
              <p>{sentData.para}</p>
            </div>
          </div>
        ))}
      </Glider>
       <CardHeader className="text-gray-800 text-xl font-bold">
        Key Events
      </CardHeader>
      <CardContent className="flex justify-start items-center gap-5">
        <div className="!w-24 h-24 md:w-40 md:h-40 rounded-full bg-green-100 flex justify-center items-center">
          <div className=" text-2xl md:text-5xl text-green-600">76</div>
          <span className="text-sm text-green-600">%</span>
        </div>
        <div className="flex justify-start items-start flex-col gap-2 text-gray-500">
          <div className="flex justify-center items-center ">
            <div>Buy</div>
            <div className="bg-green-900 w-[150px] md:w-[600px] h-2 rounded-full"></div>
            <span className="font-bold">76%</span>
          </div>
          <div className="flex justify-center items-center">
            <div>Hold</div>
            <div className="bg-gray-500 w-[50px] h-2 rounded-full"></div>
            <span>8%</span>
          </div>
          <div className="flex justify-center items-center">
            <div>Sell</div>
            <div className="bg-red-700 w-[100px] h-2 rounded-full"></div>
            <span>16%</span>
          </div>
        </div>
      </CardContent> 
    </Card>
  );
};

const About = () => {
  return (
    <Card className="mt-10">
      <CardTitle className="pl-5 pt-5">About Bitcoin</CardTitle>
      <CardHeader className="font-semibold">What is Bitcoin?</CardHeader>
      <CardContent>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </CardContent>

      <div className="w-full border-b-1"></div>
      <CardHeader className="font-semibold">
        Lorem ipsum dolor sit amet
      </CardHeader>

      <CardContent>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </CardContent>
      <CardContent>
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </CardContent>
      <CardContent>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </CardContent>

      <div className="w-full border-b-1"></div>

      <CardTitle className="pl-5 pt-5">Already Holding Bitcoin?</CardTitle>
      <CardContent className="md:w-11/12 gap-5 flex md:flex-row flex-col">
        <div
          className={`bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] md:w-1/2 h-40 rounded-xl flex justify-between px-4 items-center gap-5`}
        >
          <div>
            <Image
              src={"/Rectangle 11947.png"}
              alt=""
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-3xl font-semibold">Calculate your Profits</h4>
            <button className="w-11/12 bg-white font-bold rounded-lg text-black flex text-center items-center justify-center py-2">
              Check Now
              <ArrowRight />
            </button>
          </div>
        </div>
        <div
          className={`bg-gradient-to-r from-[#FF9865] to-[#EF3031] md:w-1/2 h-40 rounded-xl flex justify-between px-4 items-center gap-5`}
        >
          <div>
            <Image
              src={"/Rectangle 11947 (2).png"}
              alt=""
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-3xl font-semibold">
              Calculate your tax liability
            </h4>
            <button className="w-11/12 bg-white font-bold rounded-lg text-black flex text-center items-center justify-center py-2">
              Check Now
              <ArrowRight />
            </button>
          </div>
        </div>
      </CardContent>

      <div className="w-full border-b-1"></div>
      <CardContent>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </CardContent>
    </Card>
  );
};

const Tokenomics = () => {
  let data = [
    { title: "One", value: 20, color: "#E38627", label: "Outer Circle" },
    { title: "Two", value: 80, color: "#0082FF", label: "Middle Circle" },
  ];
  return (
    <Card className="my-10 hidden md:flex justify-center items-center flex-col">
      <div className="w-11/12">
        <CardTitle>Tokenomics</CardTitle>
        <CardTitle className="mt-5">Initial Distribution</CardTitle>
        <div className="flex w-11/12">
          <PieChart
            data={data}
            lineWidth={30}
            paddingAngle={0}
            startAngle={0}
            className="h-24 w-fit "
          />
          <div className="flex items-center flex-col h-24 justify-center">
            {data.map((point, index) => (
              <div key={index} className="label">
                <div className={`bg-[${point.color} w-1 h-1]`}></div>
                <div className="name">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </div>
      </div>
    </Card>
  );
};

const Team = () => {
  return (
    <Card className="flex justify-center items-center flex-col my-5">
      <div className="flex items-start justify-start w-11/12 py-3 !text-start font-semibold text-2xl">
        <h4>Team</h4>
      </div>
      <CardDescription className="w-11/12 my-2">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </CardDescription>
      {["/sandeep.png", "/sandeep (1).png", "/sandeep.png"].map((data) => (
        <div
          className="w-11/12 rounded-md bg-[#E8F4FD] flex gap-5 p-2 mb-3 flex-col md:flex-row"
          key={data}
        >
          <div className="md:w-fit flex flex-col items-center justify-center">
            <Image src={data} alt="team" width={200} height={200} />

            <h4 className="font-semibold">John Smith</h4>
            <div className="text-xs whitespace-nowrap text-gray-400">
              Designation here
            </div>
          </div>
          <div className="flex items-center">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
      ))}
    </Card>
  );
};

const MainBlock = ({ trendingCoin }) => {
  return (
    <div className="md:w-9/12">
      <TradingViewWidget />
      <TabBlock />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
      <Card className="p-4 mt-10">
        <CardTitle className="my-3">You May Also Like</CardTitle>
        <GliderCarousel carousalData={trendingCoin} />

        <CardTitle className="my-3">Trending Coins</CardTitle>
        <GliderCarousel carousalData={trendingCoin} />
      </Card>
    </div>
  );
};

const TrendingBlock = ({ trendingCoin }) => {
  return (
    <div className="!h-fit md:w-[25%]">
      <Card className="bg-[#0052FE] !text-white text-center">
        <CardHeader>Get Started with KoinX for FREE</CardHeader>
        <CardDescription className="text-white">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </CardDescription>
        <CardContent className="text-center flex flex-1 justify-center mt-5">
          <Image
            src="/frame.png"
            alt="trending block image"
            width={180}
            height={200}
          />
        </CardContent>
        <CardFooter className="w-11/12 flex justify-center items-center">
          <button className="w-11/12 bg-white font-bold rounded-lg text-black flex text-center items-center justify-center py-2">
            Get Started for FREE <ArrowRight />
          </button>
        </CardFooter>
      </Card>
      <Card className="mt-5">
        <CardHeader>Trending Coins (24h)</CardHeader>
        <CardContent>
          {trendingCoin &&
            trendingCoin.length > 0 &&
            trendingCoin.slice(0, 3).map((coin) => (
              <div
                className="flex justify-between items-center my-2"
                key={coin.item.id}
              >
                <div className="flex">
                  <Avatar>
                    <AvatarImage src={coin?.item?.small} alt="coin img" />
                    <AvatarFallback>{coin?.item?.symbol}</AvatarFallback>
                  </Avatar>
                  <div>
                    {coin?.item?.name} ({coin?.item?.symbol})
                  </div>
                </div>
                <div className="bg-green-300 flex w-16 px-1 rounded-md">
                  {coin?.item?.data?.price_change_percentage_24h?.inr.toFixed(
                    2
                  )}
                  %
                </div>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default function Home() {
  const [trendingCoin, setTrendingCoin] = useState([]);
  useEffect(() => {
    const handleTrendingCoin = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        if (res) {
          console.log("res", res?.data);
          setTrendingCoin(res?.data?.coins);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    handleTrendingCoin();
  }, []);
  return (
    <div className="pt-16">
      <div className="pl-10 text-gray-600 py-2">
        Cryptocurrencies {" >> "} <span className="text-black">Bitcoin</span>
      </div>
      <div className="w-full justify-center items-center flex">
        <div className="flex w-[95%] gap-5 justify-between flex-col md:flex-row">
          <MainBlock trendingCoin={trendingCoin} />
          <TrendingBlock trendingCoin={trendingCoin} />
        </div>
      </div>
    </div>
  );
}
