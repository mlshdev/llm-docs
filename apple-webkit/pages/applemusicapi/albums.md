> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums](https://developer.apple.com/documentation/applemusicapi/albums)

# Albums

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents an album.

## Declaration

```
object Albums
```

## Properties

- `id` — `string` (required): The identifier for the album.
- `type` — `string` (required): This value is always `albums`.
  **Allowed values:** `albums`
- `href` — `string` (required): The relative location for the album resource.
- `attributes` — `Albums.Attributes`: The attributes for the album.
- `relationships` — `Albums.Relationships`: The relationships for the album.
- `views` — `Albums.Views`: The relationship views for the album.

## Mentioned In

- [Handling Resource Representation and Relationships](handling-resource-representation-and-relationships.md)

## Topics

### Related Objects

- [Albums.Attributes](albums/attributes-data.dictionary.md): The attributes for an album resource.
- [Albums.Relationships](albums/relationships-data.dictionary.md): The relationships for an album resource.
- [Albums.Views](albums/views-data.dictionary.md): The relationship views for an album resource.

## See Also

### Handling the Response

- [AlbumsResponse](albumsresponse.md): The response to an albums request.
- [LibraryAlbums](libraryalbums.md): A resource object that represents a library album.
- [LibraryAlbumsResponse](libraryalbumsresponse.md): The response to a library albums request.
