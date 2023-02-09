const DetailsHeader = ({ artistsId, artistData, songData }) => (
    <div className="relative flex flex-col w-full">
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
        <img
            alt="artistImg"
            src={artistsId ? artistData?.data[0]?.attributes?.artwork?.url : songData?.images?.coveart}
            className=""
        />
    </div>
);

export default DetailsHeader;
