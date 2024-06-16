const Msg = ({ id }) => {
  return (
    <div className="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img
          className="rounded-full h-12 w-12"
          src={`/${id}.jpg`}
          alt="ChitChat Logo"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default Msg;
