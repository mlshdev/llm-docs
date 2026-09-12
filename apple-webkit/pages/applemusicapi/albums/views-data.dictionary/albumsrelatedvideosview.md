> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/views-data.dictionary/albumsrelatedvideosview](https://developer.apple.com/documentation/applemusicapi/albums/views-data.dictionary/albumsrelatedvideosview)

# Albums.Views.AlbumsRelatedVideosView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this album to music videos for the songs on the album.

## Declaration

```
object Albums.Views.AlbumsRelatedVideosView
```

## Properties

- `href` — `string`: The relative location to fetch the view directly.
- `next` — `string`: The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
- `attributes` — `Albums.Views.AlbumsRelatedVideosView.Attributes` (required): The attributes for the view.
- `data` — `[MusicVideos]` (required): The music videos available for songs on the album.

## Topics

### Related Objects

- [Albums.Views.AlbumsRelatedVideosView.Attributes](albumsrelatedvideosview/attributes-data.dictionary.md): The attributes for the view.

## See Also

### Related Objects

- [Albums.Views.AlbumsAppearsOnView](albumsappearsonview.md): A relationship view from this album to a selection of playlists tracks from this album appear on.
- [Albums.Views.AlbumsOtherVersionsView](albumsotherversionsview.md): A relationship view for other versions of this album.
- [Albums.Views.AlbumsRelatedAlbumsView](albumsrelatedalbumsview.md): A relationship view from this album to related and similar albums.
