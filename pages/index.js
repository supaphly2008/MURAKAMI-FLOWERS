import Head from "next/head";
import { useRouter } from "next/router";

const Button = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className="h-[60px] sm:text-[18px] sm:h-[44px] hover:bg-[#3E3E3E] transition duration-500 ease-in cursor-pointer bg-black rounded-full flex items-center justify-center w-1/2 mx-[7.5px]">
      {text}
    </div>
  );
};

export default function Home() {
  const router = useRouter();

  const onButtonClick = (route) => {
    router.push(route);
  };

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>MURAKAMI.FLOWERS</title>
        <meta name="description" content="MURAKAMI FLOWERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-[68px] px-[20px] py-[15px] flex bg-black fixed w-full items-center justify-center text-[40px] font-[500] sm:text-[30px]">MURAKAMI.FLOWERS</header>
      <div className="flex justify-center items-center h-[calc(100%-110px)]">
        <div className="max-w-[430px] sm:max-w-[350px]">
          <img className="object-contain" src="/home.png" alt="MURAKAMI FLOWERS" />
        </div>
      </div>
      <div className="px-[50px] pb-[130px] mx-auto">
        <section className="text-[20px] sm:text-[16px] leading-[2]">
          <p>
            Murakami.Flowers is a work in which artist Takashi Murakami’s representative artwork, flowers, are expressed as dot art evocative of Japanese TV games created in the 1970s. The work is being developed with the number 108 as the keyword; a combination of 108 backgrounds and flower colors
            make up a field, and there are 108 fields. Each field has 108 flower images, resulting in 11,664 flower images in total. The number 108 is a reference to bonnō, or earthly temptations.
          </p>
          <br />
          <p>
            Whitelist will mainly consist of the holders of RTFKT’s Clone X with Murakami Drip, of which there are 3,000. In addition, there will be Murakami-related Whitelist of 500, as well as Friends & Family. I plan to set aside 4,000 for the Whitelist and Friends & Family together. (The
            unclaimed quantity after the Whitelist and Friends & Family distributions will be offered through Public Sale.) 6,751 will subsequently be offered through Public Sale, which will be a lottery. Then comes the Lucky 727 Proof, 727 being Takashi Murakami’s lucky number. After that, there
            are 78 in the Zen Number Proof, and the Bonnō Proof has 108 for the number of earthly temptations. I intend to release these last two one day, when the time is ripe.
          </p>
          <br />
          <p>
            The purchase will be limited to one flower per MetaMask wallet. At the time of the release, each will be distributed as a “seed,” which can be evolved into (redeemed as) a flower at the time of Reveal after the Public Sale. There is no knowing which of the 11,664, individually
            hand-generated flowers your seed will turn into until the time of Reveal.
          </p>
          <br />
          <p>
            Sales Price Whitelist Presale： <br />
            0.0727 ETH
            <br /> Public Sale: 0.108 ETH
          </p>
          <div className="mt-[50px] mx-auto max-w-[800px]">
            <img className="mx-auto" src="/chart.svg" alt="chart" />
          </div>
        </section>
        <section className="pt-[140px] font-[500] text-[20px] sm:text-[16px] leading-[2]">
          <h2 className="text-center text-[50px] mb-[90px] sm:text-[24px]">About Pink & White Flowers</h2>
          <div className="mb-[50px]">
            <img className="mx-auto" src="/flowers.png" alt="flowers" />
          </div>
          <p>The 108 Pink & White flower designs were born out of the first iteration of this project in March, 2021. At first I tried to release them in an auction format on OpenSea, but because I was unable to prepare my own smart contract, I took them down.</p>
          <br />
          <p>
            I have already produced merchandise, prints, and paintings with these first 108 designs, Pink & White 1 through 108; even a QR code is assigned to each, and they are linked to my old OpenSea project mentioned above. I consider all this an event of a generation ago, and plan to leave it
            as is, as a time capsule. They are therefore not going to be part of the release this time, though if, after I do related exhibitions and go through other processes of recognition, some people still wish to have these works, I may explore offering them for sale then.
          </p>
        </section>
      </div>

      <footer className="fixed bottom-0 h-[80px] sm:h-[64px] bg-footer--gray w-full px-[30px] py-[10px] sm:px-[10px] text-[30px] font-[500]">
        <div className="max-w-[830px] mx-auto my-0 flex flex-1">
          <Button onClick={() => onButtonClick("/whitelist")} text="Presale for Whitelist" />
          <Button onClick={() => onButtonClick("/publicSale")} text="Public Sale" />
        </div>
      </footer>
    </div>
  );
}
