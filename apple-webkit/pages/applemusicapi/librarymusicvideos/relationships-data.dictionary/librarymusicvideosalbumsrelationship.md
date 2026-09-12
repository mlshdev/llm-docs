> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary/librarymusicvideosalbumsrelationship](https://developer.apple.com/documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary/librarymusicvideosalbumsrelationship)

# LibraryMusicVideos.Relationships.LibraryMusicVideosAlbumsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library music video to its albums in the library.

## Declaration

```
object LibraryMusicVideos.Relationships.LibraryMusicVideosAlbumsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[LibraryAlbums]` (required): The albums in the library the music video is associated with, if any.

## See Also

### Related Objects

- [LibraryMusicVideos.Relationships.LibraryMusicVideosArtistsRelationship](librarymusicvideosartistsrelationship.md): A relationship from the library music video to its artists in the library.
- [LibraryMusicVideos.Relationships.LibraryMusicVideosCatalogRelationship](librarymusicvideoscatalogrelationship.md): A relationship from the library music video to its associated catalog content.
