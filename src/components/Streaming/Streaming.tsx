import React from 'react';
import './Streaming.scss';
import { AvailabilityInfo } from '../../models/MovieResponse';
import { MOVIE_POSTER_PATH } from '../../constants/movie';

export type StreamingProps = {
	streamingInfo: AvailabilityInfo[];
	justWatchLink: string;
	shouldShowStreamingData: boolean;
};

export const Streaming = ({ streamingInfo, justWatchLink, shouldShowStreamingData }: StreamingProps) => {
	return (
		<div className='streaming-container'>
			{shouldShowStreamingData &&
				streamingInfo.map((info: AvailabilityInfo) => {
					return (
						<a key={info.provider_id} href={justWatchLink} target='_blank' rel='noreferrer'>
							<img
								className='streaming-logo'
								key={info.provider_id}
								alt={info.provider_name}
								src={`${MOVIE_POSTER_PATH}${info.logo_path}`}
							/>
						</a>
					);
				})}
		</div>
	);
};
