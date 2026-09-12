> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos/relationships-data.dictionary/musicvideosgenresrelationship](https://developer.apple.com/documentation/applemusicapi/musicvideos/relationships-data.dictionary/musicvideosgenresrelationship)

# MusicVideos.Relationships.MusicVideosGenresRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the music video to its genres.

## Declaration

```
object MusicVideos.Relationships.MusicVideosGenresRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Genres]` (required): The genres associated with the music video.

## See Also

### Related Objects

- [MusicVideos.Relationships.MusicVideosAlbumsRelationship](musicvideosalbumsrelationship.md): A relationship from the music video to its albums.
- [MusicVideos.Relationships.MusicVideosArtistsRelationship](musicvideosartistsrelationship.md): A relationship from the music video to its artists.
- [MusicVideos.Relationships.MusicVideosLibraryRelationship](musicvideoslibraryrelationship.md): A relationship from the music video to its library.
- [MusicVideos.Relationships.MusicVideosSongsRelationship](musicvideossongsrelationship.md): A relationship from the music video to its songs.
