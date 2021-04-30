export default function SuggestionVideos() {
  const videoList = [
    {
      src: "BT94ZwTGSQU",
      title: "Dog Reviews Food With Wife | Tucker Taste Test 18",
    },
    {
      src: "N_0eAGBNuio",
      title: "Baby Husky grows up",
    },
    {
      src: "_ZSTUGLOIzM",
      title: "My dog rents a swimming pool",
    },
    {
      src: "QqrY8gUnM3o",
      title: "My dog has a puppy sleepover",
    },
  ];

  return (
    <div className="col-md-5">
      {videoList.map((video) => (
        <div className="row mt-1">
          <div className="col-md-8">
            <iframe
              title="react-summet"
              // width='120'
              src={`https://www.youtube.com/embed/${video.src}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="col-md-4">
            <a href={`https://www.youtube.com/watch?v=${video.src}`}>
              {video.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
