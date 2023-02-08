import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetSongDetailsQuery } from '../redux/services/music-api';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    console.log(songid);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { song: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

    console.log(songData);
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistsId={artistsId} songData={songData} /> */}
            <div className="mb-10 ">
                <h2 className="text-white text-3xl font-bold"> Lyrics :</h2>
            </div>
        </div>
    );
};

export default SongDetails;
