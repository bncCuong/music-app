import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistsId } = useParams();
    const { data: artistData, isFetching: isFetchingArtistsData, error } = useGetArtistDetailsQuery(artistsId);

    const { isPlaying, activeSong } = useSelector((state) => state.player);
    if (isFetchingArtistsData) return <Loader />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistsId={artistsId} artistData={artistData} />
            <RelatedSongs artistData={artistData} artistsId={artistsId} isPlaying={isPlaying} activeSong={activeSong} />
        </div>
    );
};

export default ArtistDetails;
