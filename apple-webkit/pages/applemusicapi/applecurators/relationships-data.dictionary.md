> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/applecurators/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/applecurators/relationships-data.dictionary)

# AppleCurators.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for an Apple curator resource.

## Declaration

```
object AppleCurators.Relationships
```

## Properties

- `playlists` — `AppleCurators.Relationships.AppleCuratorsPlaylistsRelationship`: The playlists associated with this curator. By default, `playlists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [AppleCurators.Relationships.AppleCuratorsPlaylistsRelationship](relationships-data.dictionary/applecuratorsplaylistsrelationship.md): A relationship from the Apple curator to its playlists.

## See Also

### Related Objects

- [AppleCurators.Attributes](attributes-data.dictionary.md): The attributes for an Apple curator resource.
