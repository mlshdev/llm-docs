> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/views-data.dictionary/albumsappearsonview](https://developer.apple.com/documentation/applemusicapi/albums/views-data.dictionary/albumsappearsonview)

# Albums.Views.AlbumsAppearsOnView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this album to a selection of playlists tracks from this album appear on.

## Declaration

```
object Albums.Views.AlbumsAppearsOnView
```

## Properties

- `href` — `string`: The relative location to fetch the view directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `attributes` — `Albums.Views.AlbumsAppearsOnView.Attributes` (required): The attributes for the view.
- `data` — `[Playlists]` (required): A selection of playlists that tracks from this album appear on.

## Topics

### Related Objects

- [Albums.Views.AlbumsAppearsOnView.Attributes](albumsappearsonview/attributes-data.dictionary.md): The attributes for the view.

## See Also

### Related Objects

- [Albums.Views.AlbumsOtherVersionsView](albumsotherversionsview.md): A relationship view for other versions of this album.
- [Albums.Views.AlbumsRelatedAlbumsView](albumsrelatedalbumsview.md): A relationship view from this album to related and similar albums.
- [Albums.Views.AlbumsRelatedVideosView](albumsrelatedvideosview.md): A relationship view from this album to music videos for the songs on the album.
