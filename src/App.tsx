import reaction from "/images/icon-reaction.svg";
import memory from "/images/icon-memory.svg";
import verbal from "/images/icon-verbal.svg";
import visual from "/images/icon-visual.svg";
function App() {
  return (
    <>
      <div className="flex flex-col ">
        <div className=" blue bg-custom-gradient pt-[24px] pb-[40px] rounded-tl-none rounded-br-[32px] rounded-tr-none rounded-bl-[32px]">
          <h1 className="text-Hone text-center mb-[24px] text-[18px] font-bold">
            Your Result
          </h1>
          <div className="circle  w-[140px] h-[140px] bg-custom-gradient2 rounded-full ml-auto mr-auto flex flex-col items-center justify-center mb-[24px]">
            <p className=" text-[#fff] text-[56px] ">76</p>
            <span className="text-Hone text-[16px] font-bold">of 100</span>
          </div>
          <h2 className="text-[#fff] text-[24px] text-center font-bold mb-[8px]">
            Great
          </h2>
          <p className="text-Hone text-[16px] text-center">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="white pt-[24px] pr-[30px] pb-[30px] pl-[30px]">
          <h1 className="text-[#303B59] text-[18px] font-bold mb-[24px]">
            summary
          </h1>
          <div className=" flex flex-col gap-[16px]">
            <div className=" first-con  rounded-[12px] flex justify-between items-center p-[16px] ">
              <div className="flex items-center gap-[12px]">
                <img src={reaction} alt="" />
                <span>Reaction</span>
              </div>
              <span className="text-[16px] text-[#303B59]">
                80
                <span className="text-[16px] text-[#303B59] opacity-50">
                  /100
                </span>
              </span>
            </div>
            <div className="second-con  p-[16px] flex justify-between item-center rounded-[12px]">
              <div className=" flex items-center gap-[12px] ">
                <img src={memory} alt="" />
                <span>Memory</span>
              </div>
              <span className="text-[16px] font-bold text-[#303B59]">
                92
                <span className="text -[16px] font-bold text-[#303B59] opacity-50">
                  /100
                </span>
              </span>
            </div>
            <div className=" third-con p-[16px] flex justify-between items-center rounded-[12px]">
              <div className=" flex items-center gap-[12px]">
                <img src={memory} alt="" />
                <span>Verbal</span>
              </div>
              <span className="text-[16px] text-[#303B59] font-bold">
                61
                <span className="text-[16px] text-[#303B59] font-bold opacity-50">
                  /100
                </span>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
