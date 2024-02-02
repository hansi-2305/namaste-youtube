// import React from 'react'

// const Live = () => {
//   return (
//     <div>Live</div>
//   )
// }

// export default Live

import React from "react";
import useGetLiveVideos from "../hooks/useGetLiveVideos";
import ShimmerVideoContainer from "../components/ShimmerVideoContainer";
import { useSelector } from "react-redux";
import VideoContainer from "../components/VideoContainer";

const Live = () => {
  useGetLiveVideos();
  const videos = useSelector((store) => store.search.liveVideos);

  if (!videos) return null;

  return (
    <div className="mt-24">
      <div>
        <VideoContainer videos={videos} type={"category"} />
      </div>
    </div>
  );
};

export default Live;
