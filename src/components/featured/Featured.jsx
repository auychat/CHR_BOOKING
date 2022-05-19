import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max300/166314626.webp?k=6ad211920fff3fe0009753262db09dff07c1c02e593c2b0c84c1712f394d0d66&o="
          alt=""
          className=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max300/344881660.webp?k=24318a69ccb8d2e1848371fd01174637087e7626b16b972f6ee0c7e96ae4f7d3&o="
          alt=""
          className=""
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>532 properties</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max300/332926100.webp?k=28eb909b9e16c14c0a2e41f7062b580bcf889b76388df8651bb9fe19784a156e&o="
          alt=""
          className=""
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>533 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
