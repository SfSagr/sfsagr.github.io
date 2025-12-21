import React, { useEffect } from "react";

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="preloader-heading">
        <div className="load-text">
          <span>S</span>
          <span>A</span>
          <span>G</span>
          <span>A</span>
          <span>R</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
