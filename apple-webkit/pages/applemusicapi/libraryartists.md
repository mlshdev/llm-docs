> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryartists](https://developer.apple.com/documentation/applemusicapi/libraryartists)

# LibraryArtists

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents an artist present in a user’s library.

## Declaration

```
object LibraryArtists
```

## Properties

- `id` — `string` (required): The identifier for the library artist.
- `type` — `string` (required): This value is always `library-artists`.
  **Allowed values:** `library-artists`
- `href` — `string` (required): The relative location for the library artist resource.
- `attributes` — `LibraryArtists.Attributes`: The attributes for the library artist.
- `relationships` — `LibraryArtists.Relationships`: The relationships for the library artist.

## Topics

### Related Objects

- [LibraryArtists.Attributes](libraryartists/attributes-data.dictionary.md): The attributes for a library artist resource.
- [LibraryArtists.Relationships](libraryartists/relationships-data.dictionary.md): The relationships for a library artist resource.

## See Also

### Handling the Response

- [Artists](artists.md): A resource object that represents the artist of an album where an artist can be one or more people.
- [ArtistsResponse](artistsresponse.md): The response to an artists request.
- [LibraryArtistsResponse](libraryartistsresponse.md): The response to a library artists request.
