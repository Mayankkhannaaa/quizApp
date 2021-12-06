export const TextInputShort = (props) => {
  return (
    <div
      className={`${props.className} my-4 ${
        props.half ? "sm:w-full md:w-48" : "sm:w-full md:w-84 "
      } `}
    >
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={props.onChange}
      />
    </div>
  );
};
