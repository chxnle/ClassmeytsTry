import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="w-[573.5px] flex flex-col items-start justify-start gap-[24.9px] max-w-full text-center text-21xl text-text-main-color font-baloo">
      <div className="self-stretch flex flex-col items-end justify-start gap-[14.2px] max-w-full">
        <div className="flex flex-row items-start justify-end py-0 pr-[68.9px] pl-[73px] mq675:pl-9 mq675:pr-[34px] mq675:box-border">
          <h1 className="m-0 relative text-inherit tracking-[0.15em] font-normal font-inherit z-[1] mq450:text-5xl mq750:text-13xl">
            Create an Account
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[16.1px] text-mini text-secondary-color-blue font-comfortaa">
          <div className="w-[185.5px] relative tracking-[0.05em] flex items-center justify-center shrink-0 z-[1]">
            Let’s get started!
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[10.8px] gap-[12.5px] mq675:flex-wrap">
          <div className="flex-[0.9785] box-border flex flex-row items-start justify-start pt-[14.3px] pb-[11px] pr-[7px] pl-0 min-w-[182px] z-[1] border-b-[1px] border-solid border-secondary-color-blue mq675:flex-1">
            <input
              className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-4 flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[164px] p-0"
              placeholder="First Name"
              type="text"
            />
            <div className="h-[43px] w-[280px] relative box-border hidden border-b-[1px] border-solid border-secondary-color-blue" />
          </div>
          <div className="flex-1 box-border flex flex-row items-start justify-start pt-[13.5px] px-[0.5px] pb-3 min-w-[182px] z-[1] border-b-[1px] border-solid border-secondary-color-blue mq675:flex-1">
            <input
              className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-4 flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[167px] p-0"
              placeholder="Last Name"
              type="text"
            />
            <div className="h-[43px] w-[280px] relative box-border hidden border-b-[1px] border-solid border-secondary-color-blue" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[10.8px] box-border max-w-full">
          <div className="flex-1 box-border flex flex-row items-start justify-start pt-[11.3px] px-0 pb-2.5 max-w-full z-[1] border-b-[1px] border-solid border-secondary-color-blue">
            <input
              className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-5 flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[250px] max-w-full p-0"
              placeholder="Username"
              type="text"
            />
            <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[10.8px] pr-[1.5px] pl-0 box-border max-w-full">
          <div className="flex-1 box-border flex flex-row items-start justify-start pt-[11.3px] px-0 pb-2.5 max-w-full z-[1] border-b-[1px] border-solid border-secondary-color-blue">
            <input
              className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-5 flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[250px] max-w-full p-0"
              placeholder="Email"
              type="text"
            />
            <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
          </div>
        </div>
        <div className="self-stretch box-border flex flex-row items-start justify-start pt-[13.3px] pb-3 pr-[3px] pl-0 max-w-full z-[1] border-b-[1px] border-solid border-secondary-color-blue">
          <input
            className="w-full [border:none] [outline:none] flex font-comfortaa text-sm bg-[transparent] h-4 flex-1 relative tracking-[0.05em] font-bold text-secondary-color-blue text-left items-center min-w-[250px] max-w-full p-0"
            placeholder="Student Number "
            type="text"
          />
          <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16.5px]">
        <select
          className="h-[43px] flex-1 bg-[transparent] box-border flex flex-row items-end justify-start pt-[6.8px] px-0 pb-[10.799999999998544px] gap-[44.1px] font-comfortaa font-bold text-sm text-secondary-color-blue min-w-[135px] z-[1] border-b-[1px] border-solid border-secondary-color-blue"
          required={true}
        >
          <option value="College">College</option>
          <option value="College of Science">College of Science</option>
        </select>
        <select
          className="flex-1 bg-[transparent] box-border flex flex-row items-end justify-between pt-1.5 px-0 pb-[8.799999999999272px] font-comfortaa font-bold text-sm text-secondary-color-blue min-w-[135px] gap-[20px] z-[1] border-b-[1px] border-solid border-secondary-color-blue"
          required={true}
        >
          <option value="Department">Department</option>
          <option value="Computer Science">Computer Science</option>
        </select>
        <select className="flex-1 bg-[transparent] box-border flex flex-row items-start justify-between pt-[11.5px] px-0 pb-1 font-comfortaa font-bold text-sm text-secondary-color-blue min-w-[135px] gap-[20px] z-[1] border-b-[1px] border-solid border-secondary-color-blue">
          <option value="Year Level">Year Level</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
          <option value="5th Year">5th Year</option>
        </select>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="flex-1 box-border flex flex-row items-end justify-start pt-[6.6px] pb-[7px] pr-0.5 pl-0 max-w-full [row-gap:20px] z-[1] border-b-[1px] border-solid border-secondary-color-blue mq675:flex-wrap mq675:pl-0.5 mq675:box-border">
          <input
            className="w-[calc(100%_-_32px)] [border:none] [outline:none] bg-[transparent] h-[22.5px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px] box-border font-comfortaa font-bold text-sm text-secondary-color-blue min-w-[300px] max-w-full"
            placeholder="Password"
            type="password"
          />
          <div className="h-[43px] w-[572px] relative box-border hidden max-w-full border-b-[1px] border-solid border-secondary-color-blue" />
          <img className="h-[27.4px] w-[30px] relative z-[2]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
