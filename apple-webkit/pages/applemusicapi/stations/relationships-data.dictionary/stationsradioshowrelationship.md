> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/stations/relationships-data.dictionary/stationsradioshowrelationship](https://developer.apple.com/documentation/applemusicapi/stations/relationships-data.dictionary/stationsradioshowrelationship)

# Stations.Relationships.StationsRadioShowRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

For radio show episodes, this relationship is the Apple Curator that represents the radio show.

## Declaration

```
object Stations.Relationships.StationsRadioShowRelationship
```

## Properties

- `data` — `[AppleCurators]` (required): A collection of resources in the relationship.
- `href` — `string`: A relative location to fetch the relationship, if it may be fetched directly.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
