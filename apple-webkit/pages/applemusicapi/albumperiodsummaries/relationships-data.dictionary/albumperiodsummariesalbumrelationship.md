> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/albumperiodsummaries/relationships-data.dictionary/albumperiodsummariesalbumrelationship

# AlbumPeriodSummaries.Relationships.AlbumPeriodSummariesAlbumRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships from album-period-summary to other resources.

## Declaration

```
object AlbumPeriodSummaries.Relationships.AlbumPeriodSummariesAlbumRelationship
```

## Properties

- `data` — `[Albums]` (required): A paginated collection of resources in the relationship.
- `href` — `string`: A relative location to fetch the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship.
