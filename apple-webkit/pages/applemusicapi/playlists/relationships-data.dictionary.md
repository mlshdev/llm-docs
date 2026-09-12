> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/playlists/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/playlists/relationships-data.dictionary)

# Playlists.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a playlist resource.

## Declaration

```
object Playlists.Relationships
```

## Properties

- `curator` — `Playlists.Relationships.PlaylistsCuratorRelationship`: The curator that created the playlist. By default, `curator` includes identifiers only.

  Fetch limits: None
- `library` — `Playlists.Relationships.PlaylistsLibraryRelationship`: Library playlist for a catalog playlist if added to library.
- `tracks` — `Playlists.Relationships.PlaylistsTracksRelationship`: The songs and music videos included in the playlist. By default, `tracks` includes objects.

  Fetch limits: 100 default, 300 maximum

## Topics

### Related Objects

- [Playlists.Relationships.PlaylistsCuratorRelationship](relationships-data.dictionary/playlistscuratorrelationship.md): A relationship from the playlist to its curator.
- [Playlists.Relationships.PlaylistsTracksRelationship](relationships-data.dictionary/playliststracksrelationship.md): A relationship from the playlist to its tracks.
- [Playlists.Relationships.PlaylistsLibraryRelationship](relationships-data.dictionary/playlistslibraryrelationship.md): A relationship from the playlist to its library.

## See Also

### Related Objects

- [Playlists.Attributes](attributes-data.dictionary.md): The attributes for a playlist resource.
- [Playlists.Views](views-data.dictionary.md): The views for a music video resource.
