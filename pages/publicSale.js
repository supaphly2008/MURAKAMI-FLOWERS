import { useAddress, useDisconnect, useMetamask, useNFTDrop, useEditionDrop } from "@thirdweb-dev/react";
import { useState } from "react";

const collectionAddress = "0xFB38ce2aF3857456E51Ab68C44A589Db44809f72";

const PublicSale = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();
  const editionDrop = useEditionDrop(collectionAddress);
  const [loading, setLoading] = useState(false);

  const onConnectClick = () => {
    address ? disconnect() : connectWithMetamask();
  };

  const mintNft = async () => {
    const tokenId = 0;
    const quantity = 1;
    setLoading(true);
    try {
      await editionDrop?.claimTo(address, tokenId, quantity);
      console.log("🎉 NFT claimed successfully!");
    } catch (err) {
      console.log("💩 Error claiming NFT: ", err);
    } finally {
      setLoading(false);
    }
  };

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
          You&apos;re connected to wallet{" "}
          <span className="font-[700] text-[18px]">
            {address.substring(0, 5)}...{address.substring(address.length - 5)}
          </span>
        </div>
      )}
      <div className="mx-auto mt-[50px] max-w-[300px]">
        <video className="w-full" autoPlay muted>
          <source src="/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center text-[40px] font-[700] mt-[50px] sm:text-[30px]">
        <div>Mint Price</div>
        <div>0.3 ETH / EACH</div>
        <div>124 / 1000 Minted</div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <button disabled={!address} className="px-[20px] disabled:bg-gray disabled:cursor-not-allowed font-[700] cursor-pointer h-[40px] bg-white text-black rounded-full text-[24px] min-w-[120px] flex items-center justify-center" onClick={mintNft}>
          {!address ? "Connect to Mint" : "MINT"}
        </button>
      </div>
    </div>
  );
};

export default PublicSale;
