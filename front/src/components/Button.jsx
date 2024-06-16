const Button = ({ text }) => {
  return (
    <button
      className="
        px-1 
        border-4 
        border-sky-200 
        hover:bg-sky-950
        hover:border-sky-950
        hover:text-white
        rounded-md
      "
    >
      {text}
    </button>
  );
};

export default Button;
