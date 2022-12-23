import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Typography, Box, Stack, Avatar } from '@mui/material';

import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { margin } from '@mui/system';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideo(data.items[0])
    );

    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id,snippet&type=video`
    ).then((data) => setVideos(data.items));
  }, [id]);
  if (!video?.snippet) return 'loading';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} sx={{ marginLeft: { md: 2 } }}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player'
            />
            <Typography variant='h5' color='#fff' fontWeight='bold' padding={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Avatar
                    alt={channelTitle}
                    src='/channel/UCmXmlB4-HJytD7wek0Uo97A'
                  />
                  {channelTitle} <CheckCircle sx={{ fontSize: '15px' }} />
                </Typography>
              </Link>
              <Stack direction='row' spacing={1}>
                <Typography variant='body1' color='#fff' sx={{ opacity: 0.6 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' color='#fff' sx={{ opacity: 0.6 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={videos} direction='column' autoPlay />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
