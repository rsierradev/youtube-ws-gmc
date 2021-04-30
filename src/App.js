import Comments from "./components/comments/Comments";
import MainVideo from "./components/MainVideo/MainVideo";
import SuggestionVideos from "./components/suggestions/SuggestionVideos";

function App() {
  return (
    <div className="containter-fluid">
      <div className="row mt-3">
        <MainVideo />
        <SuggestionVideos />
      </div>
      <div className="row">
        <Comments />
      </div>
    </div>
  );
}

export default App;
