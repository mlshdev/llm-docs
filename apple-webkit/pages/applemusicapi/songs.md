> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/songs](https://developer.apple.com/documentation/applemusicapi/songs)

# Songs

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a song.

## Declaration

```
object Songs
```

## Properties

- `id` — `string` (required): The identifier for the song.
- `type` — `string` (required): This value is always `songs`.
  **Allowed values:** `songs`
- `href` — `string` (required): The relative location for the song resource.
- `attributes` — `Songs.Attributes`: The attributes for the song.
- `relationships` — `Songs.Relationships`: The relationships for the song.

## Topics

### Related Objects

- [Songs.Attributes](songs/attributes-data.dictionary.md): The attributes for a song resource.
- [Songs.Relationships](songs/relationships-data.dictionary.md): The relationships for a song resource.

## See Also

### Handling the Response

- [SongsResponse](songsresponse.md): The response to a songs request.
- [LibrarySongs](librarysongs.md): A resource object that represents a library song.
- [LibrarySongsResponse](librarysongsresponse.md): The response to a library songs request.
