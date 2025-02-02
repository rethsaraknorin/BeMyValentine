"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BeMyValentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [celebrationStep, setCelebrationStep] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    if (yesPressed) {
      const timer = setTimeout(() => {
        setCelebrationStep(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setCelebrationStep(0);
  };

  const phrases = [
    "No",
    "Are you sure?",
    "ot nit bong ehh",
    "Really?",
    "🥺🥺🥺🥺",
    "U can see my eyes!!",
    "sadderest!!!",
    "im cryingggggg!!",
    "im disapearring help meeee love!!!",
    "Stilll nooooooo😭😭😵😵😵😵",
    "im depressingggg!!!",
    "please babY",
    "B chirerest klang klanggggg",
    "khoch jiteressttttt klangerest",
    "😭😭😭😭😭😭😭😭😭😭😭😭😭😭",
    "Noooooooooooooooooo",
  ];

  const images = [
    "https://media.tenor.com/Mv-fBJTJj8sAAAAM/crying.gif",  
    "https://media1.giphy.com/media/SkCBOCW2hr6SAtRa8m/giphy.gif?cid=6c09b952chqvb0lx2lc73hpa019yf9gwoftczfsf0v0p64f0&ep=v1_gifs_search&rid=giphy.gif&ct=g",      
    "https://i.pinimg.com/originals/21/0f/0a/210f0a8cc74bbd9f8be4c5def6ecced6.gif",                 
    "https://media.tenor.com/f1fVZ5yuLaIAAAAM/sad.gif",     
    "https://gifdb.com/images/high/cat-crying-viral-funny-meme-dgl4gvxq1x3zg1ra.gif",                 
    "https://gifdb.com/images/high/sad-spongebob-498-x-498-gif-gqr3lu2c95iuuuit.gif",                 
    "https://i.makeagif.com/media/12-25-2016/f3yRCi.gif",                
    "https://gifdb.com/images/high/blubbering-sad-white-cat-crying-in-tears-k1474ef2gnlfu1tc.gif",                
    "https://i.pinimg.com/originals/dc/e8/60/dce86066d2ed6d2dae3afed8a9b74fc0.gif",          
    "https://img.clipart-library.com/2/clip-sad-meme-face/clip-sad-meme-face-32.gif",                 
    "https://media1.giphy.com/media/n7JQktGKkc89cF3zLZ/giphy.gif?cid=6c09b952gtvopuk5r9demcc4zp0lj991ba777qfjglwws20h&ep=v1_stickers_search&rid=giphy.gif&ct=s",      
    "https://media1.giphy.com/media/X3vW3IU56PGEtjkh17/giphy.gif?cid=6c09b952ve069106tw7z50be6xjdj3dejlcetxt3xhypu5e6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",              
    "https://media.tenor.com/Yyxs-SbIPmYAAAAM/likeyouneverdo-crying-chiwawa.gif",                  
    "https://media.tenor.com/br5r2pHbLTAAAAAM/sad-crying.gif",        
    "https://gifdb.com/images/high/man-screaming-sad-meme-hko418znbfl311jl.gif",                
    "https://media.tenor.com/KQuejta3fmYAAAAM/scream-loud-scream.gif",                  
  ];

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getCurrentImage = () => {
    return images[Math.min(noCount, images.length - 1)];
  };

  const getCelebrationContent = () => {
    if (celebrationStep === 0) {
      return {
        image: "https://media.tenor.com/aztPWOITCsAAAAAM/kissing-making-out.gif",
        text: "YAYYYYYYYY!!! I love you so mucheresttttt!!"
      };
    } else {
      return {
        image: "https://media.tenor.com/wXfUjrXrdY4AAAAM/h%C3%B4n.gif",
        text: "YAYYYYYYYY!!! I love you so mucheresttttt!!"
      };
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {yesPressed ? (
        <div className="text-center">
          <div className="mx-auto mb-8 w-full max-w-md relative h-64">
            <Image
              src={getCelebrationContent().image}
              alt="Love celebration"
              fill
              className="object-contain transition-all duration-300 hover:scale-110"
              unoptimized
            />
          </div>
          <div className="text-4xl font-bold">{getCelebrationContent().text}</div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto mb-8 w-full max-w-md relative h-64">
            <Image
              src={getCurrentImage()}
              alt="Yayy"
              fill
              className="object-contain transition-all duration-300 hover:scale-110"
              unoptimized
            />
          </div>
          <h1 className="mb-8 text-4xl font-bold">Will you be my Valentine?</h1>
          <div className="flex items-center justify-center gap-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white transition-all hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white transition-all hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}