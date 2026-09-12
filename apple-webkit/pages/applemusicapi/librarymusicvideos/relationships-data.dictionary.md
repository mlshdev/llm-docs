> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/librarymusicvideos/relationships-data.dictionary)

# LibraryMusicVideos.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships from library music videos to other resources.

## Declaration

```
object LibraryMusicVideos.Relationships
```

## Properties

- `albums` — `LibraryMusicVideos.Relationships.LibraryMusicVideosAlbumsRelationship`: The library albums associated with the music video. By default, `albums` not included.

  Fetch limits: 10 default, 10 maximum.
- `artists` — `LibraryMusicVideos.Relationships.LibraryMusicVideosArtistsRelationship`: The library artists associated with the music video. By default, `artists` not included.

  Fetch limits: 10 default, 10 maximum.
- `catalog` — `LibraryMusicVideos.Relationships.LibraryMusicVideosCatalogRelationship`: The music video in the Apple Music catalog the library music video is associated with, when known.

  Fetch limits: None (associated with at most one catalog music video).

## Topics

### Related Objects

- [LibraryMusicVideos.Relationships.LibraryMusicVideosAlbumsRelationship](relationships-data.dictionary/librarymusicvideosalbumsrelationship.md): A relationship from the library music video to its albums in the library.
- [LibraryMusicVideos.Relationships.LibraryMusicVideosArtistsRelationship](relationships-data.dictionary/librarymusicvideosartistsrelationship.md): A relationship from the library music video to its artists in the library.
- [LibraryMusicVideos.Relationships.LibraryMusicVideosCatalogRelationship](relationships-data.dictionary/librarymusicvideoscatalogrelationship.md): A relationship from the library music video to its associated catalog content.

## See Also

### Related Objects

- [LibraryMusicVideos.Attributes](attributes-data.dictionary.md): The attributes for the library music videos resource type.
