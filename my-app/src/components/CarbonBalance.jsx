export default function CarbonBalance() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5 flex gap-x-4">
            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="256px"
                height="417px"
                viewBox="0 0 256 417"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <polygon
                    fill="#343434"
                    points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                  />
                  <polygon
                    fill="#8C8C8C"
                    points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                  />
                  <polygon
                    fill="#3C3C3B"
                    points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                  />
                  <polygon
                    fill="#8C8C8C"
                    points="127.962 416.9052 127.962 312.1852 0 236.5852"
                  />
                  <polygon
                    fill="#141414"
                    points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                  />
                  <polygon
                    fill="#393939"
                    points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                  />
                </g>
              </svg>
            </div>

            <div className="grow">
              <div className="flex items-center gap-x-2">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Total Carbon Credit Value
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  9.241 ETH
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
