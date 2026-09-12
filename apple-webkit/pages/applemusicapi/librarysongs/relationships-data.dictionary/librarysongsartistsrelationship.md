> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarysongs/relationships-data.dictionary/librarysongsartistsrelationship](https://developer.apple.com/documentation/applemusicapi/librarysongs/relationships-data.dictionary/librarysongsartistsrelationship)

# LibrarySongs.Relationships.LibrarySongsArtistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library song to its artists.

## Declaration

```
object LibrarySongs.Relationships.LibrarySongsArtistsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[LibraryArtists]` (required): The artists in the library associated with the song.

## See Also

### Related Objects

- [LibrarySongs.Relationships.LibrarySongsAlbumsRelationship](librarysongsalbumsrelationship.md): A relationship from the library song to its albums.
- [LibrarySongs.Relationships.LibrarySongsCatalogRelationship](librarysongscatalogrelationship.md): A relationship from the library song to its associated catalog content.
