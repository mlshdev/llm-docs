> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos](https://developer.apple.com/documentation/applemusicapi/musicvideos)

# MusicVideos

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a music video.

## Declaration

```
object MusicVideos
```

## Properties

- `id` — `string` (required): The identifier for the music video.
- `type` — `string` (required): This value is always `music-videos`.
  **Allowed values:** `music-videos`
- `href` — `string` (required): The relative location for the music video resource.
- `attributes` — `MusicVideos.Attributes`: The attributes for the music video.
- `relationships` — `MusicVideos.Relationships`: The relationships for the music video.
- `views` — `MusicVideos.Views`: The relationship views for the music video.

## Topics

### Related Objects

- [MusicVideos.Attributes](musicvideos/attributes-data.dictionary.md): The attributes for a music video resource.
- [MusicVideos.Relationships](musicvideos/relationships-data.dictionary.md): The relationships for a music video resource.
- [MusicVideos.Views](musicvideos/views-data.dictionary.md): The views for a music video resource.

## See Also

### Handling the Response

- [MusicVideosResponse](musicvideosresponse.md): The response to a music videos request.
- [LibraryMusicVideos](librarymusicvideos.md): A resource object that represents a library music video.
- [LibraryMusicVideosResponse](librarymusicvideosresponse.md): The response to a library music videos request.
