> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/albums/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/albums/relationships-data.dictionary)

# Albums.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for an album resource.

## Declaration

```
object Albums.Relationships
```

## Properties

- `artists` — `Albums.Relationships.AlbumsArtistsRelationship`: The artists associated with the album. By default, `artists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum
- `genres` — `Albums.Relationships.AlbumsGenresRelationship`: The genres for the album. By default, `genres` not included.

  Fetch limits: None
- `tracks` — `Albums.Relationships.AlbumsTracksRelationship`: The songs and music videos on the album. By default, `tracks` includes objects.

  Fetch limits: 300 default, 300 maximum
- `library` — `Albums.Relationships.AlbumsLibraryRelationship`: The album in the user’s library for the catalog album, if any.

  Fetch limits: None
- `record-labels` — `Albums.Relationships.AlbumsRecordLabelsRelationship`: The record labels for the album

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [Albums.Relationships.AlbumsArtistsRelationship](relationships-data.dictionary/albumsartistsrelationship.md): A relationship from the album to its artists.
- [Albums.Relationships.AlbumsGenresRelationship](relationships-data.dictionary/albumsgenresrelationship.md): A relationship from the album to its genres.
- [Albums.Relationships.AlbumsTracksRelationship](relationships-data.dictionary/albumstracksrelationship.md): A relationship from the album to its tracks.
- [Albums.Relationships.AlbumsLibraryRelationship](relationships-data.dictionary/albumslibraryrelationship.md): A relationship from the album to an associated library album.
- [Albums.Relationships.AlbumsRecordLabelsRelationship](relationships-data.dictionary/albumsrecordlabelsrelationship.md): A relationship from the album to its associated record label.

## See Also

### Related Objects

- [Albums.Attributes](attributes-data.dictionary.md): The attributes for an album resource.
- [Albums.Views](views-data.dictionary.md): The relationship views for an album resource.
