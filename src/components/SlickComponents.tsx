import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Custom Next and Prev Buttons
export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
    >
      <FiArrowRight className="size-8 rounded-full border-2  dark:text-black p-1 bg-white shadow-md hover:bg-gray-100 duration-300" />
    </button>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
    >
      <FiArrowLeft className="size-8 rounded-full border-2  dark:text-black p-1 bg-white shadow-md hover:bg-gray-100 duration-300" />
    </button>
  );
};

// Product Details page's Next and Prev Buttons
export const ProdNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
    >
      <FiArrowRight className="size-6 rounded-full border dark:text-black border-gray-200 p-1 bg-white/50 shadow-md hover:bg-gray-100 duration-300" />
    </button>
  );
};

export const ProdPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10"
    >
      <FiArrowLeft className="size-6 rounded-full border dark:text-black border-gray-200 p-1 bg-white/50 shadow-md hover:bg-gray-100 duration-300" />
    </button>
  );
};
