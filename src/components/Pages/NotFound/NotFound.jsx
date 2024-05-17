import { useEffect } from "react";
import PropTypes from "prop-types";
import BrokenTv from "../../../assets/broken-tv.png";

const NotFound = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setProgress]);

  return (
    <div className="flex items-center justify-center h-screen dark:bg-slate-900 lg:px-20 py-2 xs:px-2">
      <div className="flex text-center justify-center xs:flex-col lg:flex-row">
        {/* 404 image */}
        <div>
          <img src={BrokenTv} alt="404" className="xs:w-68 lg:w-[600px]" />
        </div>

        {/* 404 text & link */}
        <div className="flex flex-col items-center justify-center">
          {/* 404 text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              Oops! Page not found.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-sky-500">
              {`Looks like you're lost in matrix!`}
            </p>
          </div>

          {/* back to home */}
          <div>
            <a className="bg-slate-900 hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center xs:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
              Go back home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default NotFound;
