import { X } from "lucide-react";

export default function Cancel() {
  return (
    <div className="w-full md:w-fit flex justify-center items-center h-fit absolute left-1/2 translate-x-[-50%] top-0 translate-y-[50%]">
      <div className="w-[90%] md:w-[460px] h-[270px] bg-white flex flex-col justify-center items-center gap-1">
        <X
          className="w-[108px] h-[108px] rounded-full border-6 border-[red]"
          color="red"
          size={100}
        />
        <h1 className="text-base font-medium w-full text-center mt-2">
          Payment Failed
        </h1>
        <h3 className="text-sm font-semibold text-black/60 text-center">
          Please try again later
        </h3>
      </div>
    </div>
  );
}
