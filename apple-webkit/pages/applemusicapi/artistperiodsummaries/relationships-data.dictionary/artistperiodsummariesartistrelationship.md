> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artistperiodsummaries/relationships-data.dictionary/artistperiodsummariesartistrelationship](https://developer.apple.com/documentation/applemusicapi/artistperiodsummaries/relationships-data.dictionary/artistperiodsummariesartistrelationship)

# ArtistPeriodSummaries.Relationships.ArtistPeriodSummariesArtistRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships from artist-period-summary to other resources.

## Declaration

```
object ArtistPeriodSummaries.Relationships.ArtistPeriodSummariesArtistRelationship
```

## Properties

- `data` — `[Artists]` (required): A paginated collection of resources in the relationship.
- `href` — `string`: A relative location to fetch the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship.
