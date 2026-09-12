> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/curators/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/curators/relationships-data.dictionary)

# Curators.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a curator resource.

## Declaration

```
object Curators.Relationships
```

## Properties

- `playlists` — `Curators.Relationships.CuratorsPlaylistsRelationship`: The playlists associated with the curator. By default, `playlists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [Curators.Relationships.CuratorsPlaylistsRelationship](relationships-data.dictionary/curatorsplaylistsrelationship.md): A relationship from the curator to its playlists.

## See Also

### Related Objects

- [Curators.Attributes](attributes-data.dictionary.md): The attributes for a curator resource.
