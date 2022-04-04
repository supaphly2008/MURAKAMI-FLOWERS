const Whitelist = () => {
  return (
    <div className="pt-[60px] pb-[90px] px-[50px] text-center">
      <h1 className="text-[50px] font-[500] mb-[56px] sm:text-[24px] sm:mb-[36px]">Presale for Whitelist was ended.</h1>
      <p className="text-[24px] mb-[50px] sm:text-[20px]">If you already have Murakami.Flowers seed, Please confirm your seed at the address below.</p>
      <div className="mx-auto mt-0 max-w-[600px]">
        <video className="w-full" autoPlay muted>
          <source src="/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mt-[60px] sm:mt-[30px] text-[24px] sm:text-[20px] hover:text-[#B3B6B6] transition duration-500 ease-in underline break-words">
        <a href="https://opensea.io/assets/0x341a1c534248966c4b6afad165b98daed4b964ef/0">https://opensea.io/assets/0x341a1c534248966c4b6afad165b98daed4b964ef/0</a>
      </p>
    </div>
  );
};

export default Whitelist;
