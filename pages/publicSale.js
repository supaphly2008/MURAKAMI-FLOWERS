import { useAddress, useDisconnect, useMetamask, useNFTDrop, useEditionDrop } from "@thirdweb-dev/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const collectionAddress = "0xFB38ce2aF3857456E51Ab68C44A589Db44809f72";

const ERROR_CODE = {
  4001: "User denied transaction signature",
};

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
    const notification = toast.loading("Minting NFT....", {
      style: {
        background: "white",
        color: "green",
        fontWeight: "bolder",
        fontSize: "17px",
        padding: "20px",
      },
    });
    try {
      const tx = await editionDrop?.claimTo(address, tokenId, quantity);
      console.log("tx", tx);
      toast.success(`You've successfully minted MURAKAMI FLOWERS!`, {
        duration: 5000,
        style: {
          background: "white",
          color: "green",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
        },
      });
    } catch (err) {
      console.log("💩 Error claiming NFT: ", err);
      toast.error(ERROR_CODE[err.code] || "Something went wrong!", {
        duration: 5000,
        style: {
          background: "white",
          color: "red",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
        },
      });
    } finally {
      setLoading(false);
      toast.dismiss(notification);
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" />
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
        <div>0.108 ETH / EACH</div>
        <div>641 / 1,000 Claimed</div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <button disabled={!address || loading} className="px-[20px] disabled:bg-gray disabled:cursor-not-allowed font-[700] cursor-pointer h-[40px] bg-white text-black rounded-full text-[24px] min-w-[120px] flex items-center justify-center" onClick={mintNft}>
          {!address ? "Connect to Mint" : "MINT"}
        </button>
      </div>
    </div>
  );
};

export default PublicSale;
