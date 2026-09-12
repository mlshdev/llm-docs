> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos/views-data.dictionary/musicvideosmoreingenreview](https://developer.apple.com/documentation/applemusicapi/musicvideos/views-data.dictionary/musicvideosmoreingenreview)

# MusicVideos.Views.MusicVideosMoreInGenreView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship view from this music video to more music videos in a specific music video genre.

## Declaration

```
object MusicVideos.Views.MusicVideosMoreInGenreView
```

## Properties

- `href` — `string`: A relative location for the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the view if more exist.
- `attributes` — `MusicVideos.Views.MusicVideosMoreInGenreView.Attributes` (required): The attributes for the view.
- `data` — `[MusicVideos]` (required): Music videos in the given music video genre.

## Topics

### Related Objects

- [MusicVideos.Views.MusicVideosMoreInGenreView.Attributes](musicvideosmoreingenreview/attributes-data.dictionary.md): More music videos in a specific music video genre.

## See Also

### Related Objects

- [MusicVideos.Views.MusicVideosMoreByArtistView](musicvideosmorebyartistview.md): A relationship view from this music video to more music videos of various types by the artist.
