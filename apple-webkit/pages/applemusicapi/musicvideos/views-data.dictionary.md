> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos/views-data.dictionary](https://developer.apple.com/documentation/applemusicapi/musicvideos/views-data.dictionary)

# MusicVideos.Views

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The views for a music video resource.

## Declaration

```
object MusicVideos.Views
```

## Properties

- `more-by-artist` — `MusicVideos.Views.MusicVideosMoreByArtistView`: More music videos of some type by the artist.

  Fetch limits: 15 default, 100 maximum.
- `more-in-genre` — `MusicVideos.Views.MusicVideosMoreInGenreView`: More music videos in the given music video genre.

  Fetch limits: 15 default, 100 maximum.

## Topics

### Related Objects

- [MusicVideos.Views.MusicVideosMoreByArtistView](views-data.dictionary/musicvideosmorebyartistview.md): A relationship view from this music video to more music videos of various types by the artist.
- [MusicVideos.Views.MusicVideosMoreInGenreView](views-data.dictionary/musicvideosmoreingenreview.md): A relationship view from this music video to more music videos in a specific music video genre.

## See Also

### Related Objects

- [MusicVideos.Attributes](attributes-data.dictionary.md): The attributes for a music video resource.
- [MusicVideos.Relationships](relationships-data.dictionary.md): The relationships for a music video resource.
