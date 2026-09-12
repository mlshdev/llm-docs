> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/views-data.dictionary/albumsrelatedalbumsview](https://developer.apple.com/documentation/applemusicapi/albums/views-data.dictionary/albumsrelatedalbumsview)

# Albums.Views.AlbumsRelatedAlbumsView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this album to related and similar albums.

## Declaration

```
object Albums.Views.AlbumsRelatedAlbumsView
```

## Properties

- `href` — `string`: The relative location to fetch the view directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `attributes` — `Albums.Views.AlbumsRelatedAlbumsView.Attributes` (required): The attributes for the view.
- `data` — `[Albums]` (required): A collection of other albums related or similar to the album.

## Topics

### Related Objects

- [Albums.Views.AlbumsRelatedAlbumsView.Attributes](albumsrelatedalbumsview/attributes-data.dictionary.md): The attributes for the view.

## See Also

### Related Objects

- [Albums.Views.AlbumsAppearsOnView](albumsappearsonview.md): A relationship view from this album to a selection of playlists tracks from this album appear on.
- [Albums.Views.AlbumsOtherVersionsView](albumsotherversionsview.md): A relationship view for other versions of this album.
- [Albums.Views.AlbumsRelatedVideosView](albumsrelatedvideosview.md): A relationship view from this album to music videos for the songs on the album.
