import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/music-api';

const Discover = () => {
    const dispatch = useDispatch();
    const { data, isError, isFetching } = useGetTopChartsQuery();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    if (isFetching) return <Loader title="Loading songs..." />;
    if (isError) return <Error />;

    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col justify-between items-center sm:flex-row  mt-4 mb-10">
                <h2 className="font-bold text-2xl text-white">Discover</h2>
                <select
                    onChange={() => {}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
                {data.map((item, i) => (
                    <SongCard
                        key={item.key}
                        song={item}
                        i={i}
                        data={data}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
