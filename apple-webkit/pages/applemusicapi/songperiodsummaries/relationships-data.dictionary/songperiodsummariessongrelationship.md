> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/songperiodsummaries/relationships-data.dictionary/songperiodsummariessongrelationship](https://developer.apple.com/documentation/applemusicapi/songperiodsummaries/relationships-data.dictionary/songperiodsummariessongrelationship)

# SongPeriodSummaries.Relationships.SongPeriodSummariesSongRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships from `SongPeriodSummaries` to other resources.

## Declaration

```
object SongPeriodSummaries.Relationships.SongPeriodSummariesSongRelationship
```

## Properties

- `data` — `[Songs]` (required): A paginated collection of resources in the relationship.
- `href` — `string`: A relative location to fetch the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship.
