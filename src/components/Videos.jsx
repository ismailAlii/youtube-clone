import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'loading...';

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='center'
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard channelDetail={item} up={false} />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
