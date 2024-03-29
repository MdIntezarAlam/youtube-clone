import React from "react";
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  // console.log(videos)

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
