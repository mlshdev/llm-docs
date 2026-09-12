> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicvideos/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/musicvideos/relationships-data.dictionary)

# MusicVideos.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a music video resource.

## Declaration

```
object MusicVideos.Relationships
```

## Properties

- `albums` — `MusicVideos.Relationships.MusicVideosAlbumsRelationship`: The albums associated with the music video. By default, `albums` includes identifiers only.

  Fetch limits: 10 default, 10 maximum.
- `artists` — `MusicVideos.Relationships.MusicVideosArtistsRelationship`: The artists associated with the music video. By default, `artists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum.
- `genres` — `MusicVideos.Relationships.MusicVideosGenresRelationship`: The genres associated with the music video. By default, `genres` not included.

  Fetch limits: None.
- `library` — `MusicVideos.Relationships.MusicVideosLibraryRelationship`: The library of a music video if added to library.

  Fetch limits: None.
- `songs` — `MusicVideos.Relationships.MusicVideosSongsRelationship`: The songs associated with the music video.

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [MusicVideos.Relationships.MusicVideosAlbumsRelationship](relationships-data.dictionary/musicvideosalbumsrelationship.md): A relationship from the music video to its albums.
- [MusicVideos.Relationships.MusicVideosArtistsRelationship](relationships-data.dictionary/musicvideosartistsrelationship.md): A relationship from the music video to its artists.
- [MusicVideos.Relationships.MusicVideosGenresRelationship](relationships-data.dictionary/musicvideosgenresrelationship.md): A relationship from the music video to its genres.
- [MusicVideos.Relationships.MusicVideosLibraryRelationship](relationships-data.dictionary/musicvideoslibraryrelationship.md): A relationship from the music video to its library.
- [MusicVideos.Relationships.MusicVideosSongsRelationship](relationships-data.dictionary/musicvideossongsrelationship.md): A relationship from the music video to its songs.

## See Also

### Related Objects

- [MusicVideos.Attributes](attributes-data.dictionary.md): The attributes for a music video resource.
- [MusicVideos.Views](views-data.dictionary.md): The views for a music video resource.
