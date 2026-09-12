> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/stationgenres/relationships-data.dictionary/stationgenresstationsrelationship](https://developer.apple.com/documentation/applemusicapi/stationgenres/relationships-data.dictionary/stationgenresstationsrelationship)

# StationGenres.Relationships.StationGenresStationsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the station genre to associated stations.

## Declaration

```
object StationGenres.Relationships.StationGenresStationsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Stations]` (required): Stations associated with the station genre.
