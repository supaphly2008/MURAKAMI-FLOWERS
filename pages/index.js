import Head from "next/head";

const Button = ({ text }) => {
  return <div className="h-[60px] hover:bg-[#3E3E3E] transition duration-500 ease-in cursor-pointer bg-black rounded-full flex items-center justify-center w-1/2 mx-[7.5px]">{text}</div>;
};

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>MURAKAMI.FLOWERS</title>
        <meta name="description" content="MURAKAMI FLOWERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-[68px] px-[20px] py-[15px] flex items-center justify-center text-[40px] font-[500]">MURAKAMI.FLOWERS</header>
      <div className="flex justify-center items-center h-[calc(100%-110px)]">
        <div className="max-w-[430px]">
          <img className="object-contain" src="/home.png" alt="MURAKAMI FLOWERS" />
        </div>
      </div>
      <footer className="fixed bottom-0 h-[80px] bg-footer--gray w-full px-[30px] py-[10px] text-[30px] font-[500]">
        <div className="max-w-[830px] mx-auto my-0 flex flex-1">
          <Button text="Presale for Whitelist" />
          <Button text="Public Sale" />
        </div>
      </footer>
    </div>
  );
}
