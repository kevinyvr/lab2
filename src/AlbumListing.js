function AlbumListing(props) {
  return (
    <div className="albumInfo">
          <a href="./{props.id}"><img src={props.coverImg} alt={props.name} /></a>
          <a href="./{props.id}">{props.name}</a>
    </div>
  );
}

export default AlbumListing;
