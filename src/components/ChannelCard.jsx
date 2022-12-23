import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from '../utils/constants';

const ChannelCard = ({ channelDetail, up }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { md: '320px', xs: '356px' },
        borderRadius: 0,
        backgroundColor: 'transparent',
        height: '326px',
        margin: 'auto',
        boxShadow: 'none',
        marginTop: up ? '-100px' : 'auto',
      }}
    >
      <Link
        to={
          channelDetail?.id?.channelId
            ? `/channel/${channelDetail?.id?.channelId}`
            : demoChannelUrl
        }
      >
        <CardMedia
          alt={
            channelDetail?.snippet?.title
              ? channelDetail?.snippet?.title
              : demoChannelTitle
          }
          image={
            channelDetail?.snippet?.thumbnails?.medium?.url
              ? channelDetail?.snippet?.thumbnails?.medium?.url
              : demoThumbnailUrl
          }
          sx={{
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: 'hidden',
          }}
        />
        <CardContent>
          <Link
            to={
              channelDetail?.id?.channelId
                ? `/channel/${channelDetail?.id?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color='#fff'
              sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}
            >
              {channelDetail?.snippet?.title
                ? channelDetail?.snippet?.title.slice(0, 60)
                : demoVideoTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 16 }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                variant='body2'
                align='center'
                sx={{ color: '#999999' }}
              >
                {channelDetail?.statistics?.subscriberCount
                  ? parseInt(
                      channelDetail?.statistics?.subscriberCount
                    ).toLocaleString()
                  : ''}{' '}
                Subscribers
              </Typography>
            )}
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ChannelCard;
