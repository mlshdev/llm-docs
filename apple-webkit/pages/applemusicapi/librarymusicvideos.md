> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarymusicvideos](https://developer.apple.com/documentation/applemusicapi/librarymusicvideos)

# LibraryMusicVideos

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a library music video.

## Declaration

```
object LibraryMusicVideos
```

## Properties

- `id` — `string` (required): The identifier for the library music video.
- `type` — `string` (required): This value is always `library-music-videos`.
  **Allowed values:** `library-music-videos`
- `href` — `string` (required): The relative location for the library music video resource.
- `attributes` — `LibraryMusicVideos.Attributes`: The attributes for the library music video.
- `relationships` — `LibraryMusicVideos.Relationships`: The relationships for the library music video.

## Topics

### Related Objects

- [LibraryMusicVideos.Attributes](librarymusicvideos/attributes-data.dictionary.md): The attributes for the library music videos resource type.
- [LibraryMusicVideos.Relationships](librarymusicvideos/relationships-data.dictionary.md): The relationships from library music videos to other resources.

## See Also

### Handling the Response

- [MusicVideos](musicvideos.md): A resource object that represents a music video.
- [MusicVideosResponse](musicvideosresponse.md): The response to a music videos request.
- [LibraryMusicVideosResponse](librarymusicvideosresponse.md): The response to a library music videos request.
