> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artists](https://developer.apple.com/documentation/applemusicapi/artists)

# Artists

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents the artist of an album where an artist can be one or more people.

## Declaration

```
object Artists
```

## Properties

- `id` — `string` (required): The identifier for the artist.
- `type` — `string` (required): This value is always `artists`.
  **Allowed values:** `artists`
- `href` — `string` (required): The relative location for the artist resource.
- `attributes` — `Artists.Attributes`: The attributes for the artist.
- `relationships` — `Artists.Relationships`: The relationships for the artist.
- `views` — `Artists.Views`: The views for associations between artists and other resources.

## Mentioned In

- [Handling Resource Representation and Relationships](handling-resource-representation-and-relationships.md)

## Topics

### Related Objects

- [Artists.Attributes](artists/attributes-data.dictionary.md): The attributes for an artist resource.
- [Artists.Relationships](artists/relationships-data.dictionary.md): The relationships for an artist resource.
- [Artists.Views](artists/views-data.dictionary.md): The views for associations between artists and other resources.

## See Also

### Handling the Response

- [ArtistsResponse](artistsresponse.md): The response to an artists request.
- [LibraryArtists](libraryartists.md): A resource object that represents an artist present in a user’s library.
- [LibraryArtistsResponse](libraryartistsresponse.md): The response to a library artists request.
