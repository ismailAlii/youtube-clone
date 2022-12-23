import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';

import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  return (
    <Box minHeight='95vh' sx={{ backgroundColor: '#000' }}>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(219, 69, 218, 1) 0%, rgba(95, 180, 168, 1) 51%, rgba(0, 119, 144, 1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} up={true} />
      </Box>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
