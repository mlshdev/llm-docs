> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/curators/relationships-data.dictionary

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
