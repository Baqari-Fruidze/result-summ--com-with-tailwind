import reaction from "/images/icon-reaction.svg";
import memory from "/images/icon-memory.svg";
import verbal from "/images/icon-verbal.svg";
import visual from "/images/icon-visual.svg";
function App() {
  return (
    <>
      <div className=" main bg-[#fff] flex flex-col max-w-[500px] ml-auto mr-auto  desktop:flex-row gap-[40px] max-w-[800px] rounded-[32px]">
        <div className=" blue bg-custom-gradient pt-[24px] pb-[40px] rounded-tl-none rounded-br-[32px] rounded-tr-none rounded-bl-[32px] desktop:rounded-[32px] pt-[32px] pr-[54px] pb-[55px] pl-[54px] ">
          <h1 className="text-Hone text-center mb-[24px] text-[18px] font-bold desktop:text-[24px] mb-[35px]">
            Your Result
          </h1>
          <div className="circle  w-[140px] h-[140px] bg-custom-gradient2 rounded-full ml-auto mr-auto flex flex-col items-center justify-center mb-[24px] desktop:w-[200px] h-[200px] mb-[28px]">
            <p className=" text-[#fff] text-[56px] desktop:text-[72px] font-[800]">
              76
            </p>
            <span className="text-Hone text-[16px] font-bold desktop:text-[18px]">
              of 100
            </span>
          </div>
          <h2 className="text-[#fff] text-[24px] text-center font-bold mb-[8px] desktop:text-[32px] mb-[14px]">
            Great
          </h2>
          <p className="text-Hone text-[16px] text-center desktop:text-[18px] font-medium w-[25ch]">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="white pt-[24px] pr-[30px] pb-[30px] pl-[30px] desktop:pt-[38px] pr-[40px] bp-[48px] w-full ">
          <h1 className="text-[#303B59] text-[18px] font-bold mb-[24px] desktop:text-[24px] mb-[28px]">
            summary
          </h1>
          <div className=" flex flex-col gap-[16px] mb-[24px] desktop:mb-[41px]">
            <div className=" first-con  rounded-[12px] flex justify-between items-center p-[16px]  ">
              <div className="flex items-center gap-[12px]">
                <img src={reaction} alt="" />
                <span className="text-[16px] text-[#F55] font-medium desktop:text-[18px]">
                  Reaction
                </span>
              </div>
              <span className="text-[16px] text-[#303B59] font-bold desktop:text-[18px]">
                80
                <span className="text-[16px] text-[#303B59] opacity-50 desktop:text-[18px]">
                  /100
                </span>
              </span>
            </div>
            <div className="second-con  p-[16px] flex justify-between item-center rounded-[12px]">
              <div className=" flex items-center gap-[12px] ">
                <img src={memory} alt="" />
                <span className="text-[16px] text-[#FFB21E] font-medium desktop:text-[18px]">
                  Memory
                </span>
              </div>
              <span className="text-[16px] font-bold text-[#303B59] desktop:text-[18px]">
                92
                <span className="text -[16px] font-bold text-[#303B59] opacity-50 desktop:text-[18px]">
                  /100
                </span>
              </span>
            </div>
            <div className=" third-con p-[16px] flex justify-between items-center rounded-[12px]">
              <div className=" flex items-center gap-[12px]">
                <img src={verbal} alt="" />
                <span className="text-[#00BB8F] text-[16px] font-medium desktop:text-[18px]">
                  Verbal
                </span>
              </div>
              <span className="text-[16px] text-[#303B59] font-bold desktop:text-[18px]">
                61
                <span className="text-[16px] text-[#303B59] font-bold opacity-50 desktop:text-[18px]">
                  /100
                </span>
              </span>
            </div>
            <div className="fourth-con flex justify-between p-[16px] items-center rounded-[12px]">
              <div className="flex items-center gap-[12px] ">
                <img src={visual} alt="" />
                <span className="text-[16px] font-medium text-[#1125D6] desktop:text-[18px]">
                  Visul
                </span>
              </div>
              <span className="text-[16px] text-[#303B59] font-bold desktop:text-[18px]">
                72
                <span className="text-[16px] text-[#303B59] font-bold opacity-50 desktop:text-[18px]">
                  /100
                </span>
              </span>
            </div>
          </div>
          <button className="text-[18px] text-[#fff]  font-bold  bg-[#303B59] w-full rounded-[128px] py-[13px] hover: cursor-pointer hover:bg-custom-gradient">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
