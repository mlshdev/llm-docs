> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos/relationships-data.dictionary/musicvideosalbumsrelationship](https://developer.apple.com/documentation/applemusicapi/musicvideos/relationships-data.dictionary/musicvideosalbumsrelationship)

# MusicVideos.Relationships.MusicVideosAlbumsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the music video to its albums.

## Declaration

```
object MusicVideos.Relationships.MusicVideosAlbumsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Albums]` (required): The albums associated with the music video, if any.

## See Also

### Related Objects

- [MusicVideos.Relationships.MusicVideosArtistsRelationship](musicvideosartistsrelationship.md): A relationship from the music video to its artists.
- [MusicVideos.Relationships.MusicVideosGenresRelationship](musicvideosgenresrelationship.md): A relationship from the music video to its genres.
- [MusicVideos.Relationships.MusicVideosLibraryRelationship](musicvideoslibraryrelationship.md): A relationship from the music video to its library.
- [MusicVideos.Relationships.MusicVideosSongsRelationship](musicvideossongsrelationship.md): A relationship from the music video to its songs.
