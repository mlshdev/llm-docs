> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/songperiodsummaries

# SongPeriodSummaries

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The song for the period summary.

## Declaration

```
object SongPeriodSummaries
```

## Properties

- `id` — `string` (required): The identifier for the song-period-summaries resource.
- `relationships` — `SongPeriodSummaries.Relationships`: The relationships from `SongPeriodSummaries` to other resources.
- `type` — `string` (required): The type of resource.
  **Allowed values:** `song-period-summaries`

## Topics

### Dictionaries

- [SongPeriodSummaries.Relationships](songperiodsummaries/relationships-data.dictionary.md): The relationships from `SongPeriodSummaries` to other resources.
