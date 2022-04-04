import { useAddress, useDisconnect, useMetamask, useNFTDrop } from "@thirdweb-dev/react";

const collectionAddress = "0xD5bAD0df8B7449cF6dbE7a83ed55d666a08a63dd";

const PublicSale = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();
  const nftDrop = useNFTDrop(collectionAddress);

  const onConnectClick = () => {
    address ? disconnect() : connectWithMetamask();
  };

  const mintNft = () => {};

  return (
    <div>
      <header className="h-[68px] px-[20px] py-[15px] flex sm:justify-start items-center justify-center text-[40px] font-[500] sm:text-[30px] relative">
        <div>MURAKAMI.FLOWERS</div>
        <div className="px-[20px] cursor-pointer h-[30px] absolute right-[20px] bg-white text-black rounded-full text-[18px] min-w-[80px] flex items-center justify-center" onClick={onConnectClick}>
          {address ? "Disconnect" : "Connect"}
        </div>
      </header>
      {address && (
        <div className="text-center">
          You&apos;re connected to wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}
        </div>
      )}
      <div className="mx-auto mt-[50px] max-w-[300px]">
        <video className="w-full" autoPlay muted>
          <source src="https://presale.kaikaikiki.com/video/Seed_FIX_SE_1280px.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center text-[50px] font-[700] mt-[50px] sm:text-[30px]">
        <div>Mint Price</div>
        <div>0.3 ETH / EACH</div>
        <div>124 / 1000 Minted</div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <div className="px-[20px] font-[500] cursor-pointer h-[40px] bg-white text-black rounded-full text-[24px] min-w-[120px] flex items-center justify-center" onClick={mintNft}>
          MINT
        </div>
      </div>
    </div>
  );
};

export default PublicSale;
