> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarysongs](https://developer.apple.com/documentation/applemusicapi/librarysongs)

# LibrarySongs

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a library song.

## Declaration

```
object LibrarySongs
```

## Properties

- `id` — `string` (required): The identifier for the library song.
- `type` — `string` (required): This value is always `library-songs`.
  **Allowed values:** `library-songs`
- `href` — `string` (required): The relative location for the library song resource.
- `attributes` — `LibrarySongs.Attributes`: The attributes for the library song.
- `relationships` — `LibrarySongs.Relationships`: The relationships for the library song.

## Topics

### Related Objects

- [LibrarySongs.Attributes](librarysongs/attributes-data.dictionary.md): The attributes for a library song resource.
- [LibrarySongs.Relationships](librarysongs/relationships-data.dictionary.md): The relationships for a library song resource.

## See Also

### Handling the Response

- [Songs](songs.md): A resource object that represents a song.
- [SongsResponse](songsresponse.md): The response to a songs request.
- [LibrarySongsResponse](librarysongsresponse.md): The response to a library songs request.
