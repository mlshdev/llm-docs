> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/albumperiodsummaries

# AlbumPeriodSummaries

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The album for the period summary.

## Declaration

```
object AlbumPeriodSummaries
```

## Properties

- `id` — `string` (required): The identifier for the album period summaries resource.
- `relationships` — `AlbumPeriodSummaries.Relationships`: The connection from `artist-period-summary` to other resources.
- `type` — `string` (required): The type of resource. This value is always `album-period-summaries`.
  **Allowed values:** `album-period-summaries`

## Topics

### Dictionaries

- [AlbumPeriodSummaries.Relationships](albumperiodsummaries/relationships-data.dictionary.md): The relationships from album-period-summary to other resources.
