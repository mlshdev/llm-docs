> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary/librarymusicvideoscatalogrelationship](https://developer.apple.com/documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary/librarymusicvideoscatalogrelationship)

# LibraryMusicVideos.Relationships.LibraryMusicVideosCatalogRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the library music video to its associated catalog content.

## Declaration

```
object LibraryMusicVideos.Relationships.LibraryMusicVideosCatalogRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[MusicVideos]` (required): The music video from the Apple Music catalog associated with the library music video, if any.

## See Also

### Related Objects

- [LibraryMusicVideos.Relationships.LibraryMusicVideosAlbumsRelationship](librarymusicvideosalbumsrelationship.md): A relationship from the library music video to its albums in the library.
- [LibraryMusicVideos.Relationships.LibraryMusicVideosArtistsRelationship](librarymusicvideosartistsrelationship.md): A relationship from the library music video to its artists in the library.
