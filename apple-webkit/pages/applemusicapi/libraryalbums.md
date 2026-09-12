> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/libraryalbums](https://developer.apple.com/documentation/applemusicapi/libraryalbums)

# LibraryAlbums

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a library album.

## Declaration

```
object LibraryAlbums
```

## Properties

- `id` — `string` (required): The identifier for the library album.
- `type` — `string` (required): This value is always `library-albums`.
  **Allowed values:** `library-albums`
- `href` — `string` (required): The relative location for the library album resource.
- `attributes` — `LibraryAlbums.Attributes`: The attributes for the library album.
- `relationships` — `LibraryAlbums.Relationships`: The relationships for the library album.

## Topics

### Related Objects

- [LibraryAlbums.Attributes](libraryalbums/attributes-data.dictionary.md): The attributes for a library album resource.
- [LibraryAlbums.Relationships](libraryalbums/relationships-data.dictionary.md): The relationships for a library album object.

## See Also

### Handling the Response

- [Albums](albums.md): A resource object that represents an album.
- [AlbumsResponse](albumsresponse.md): The response to an albums request.
- [LibraryAlbumsResponse](libraryalbumsresponse.md): The response to a library albums request.
