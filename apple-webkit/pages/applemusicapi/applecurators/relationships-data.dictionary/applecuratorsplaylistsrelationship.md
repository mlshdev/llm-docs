> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/applecurators/relationships-data.dictionary/applecuratorsplaylistsrelationship](https://developer.apple.com/documentation/applemusicapi/applecurators/relationships-data.dictionary/applecuratorsplaylistsrelationship)

# AppleCurators.Relationships.AppleCuratorsPlaylistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the Apple curator to its playlists.

## Declaration

```
object AppleCurators.Relationships.AppleCuratorsPlaylistsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Playlists]` (required): The playlists for the curator.
