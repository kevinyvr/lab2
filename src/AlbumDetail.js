function AlbumDetail(props) {
  return (
    <div className="albumDetail">
      <img src={props.coverImg} alt={props.name} />
      <div>
        <ul>
          {props.tracks.map((track, i) => (
            <li>
              {i + 1}. {track}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlbumDetail;
