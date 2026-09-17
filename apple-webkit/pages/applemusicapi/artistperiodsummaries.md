> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/artistperiodsummaries

# ArtistPeriodSummaries

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The artist for the period summary.

## Declaration

```
object ArtistPeriodSummaries
```

## Properties

- `id` — `string` (required): The identifier for the artist period summaries resource.
- `relationships` — `ArtistPeriodSummaries.Relationships`: The [ArtistPeriodSummaries.Relationships](artistperiodsummaries/relationships-data.dictionary.md) relationship.
- `type` — `string` (required): The type of the resource.
  **Allowed values:** `artist-period-summaries`

## Topics

### Dictionaries

- [ArtistPeriodSummaries.Relationships](artistperiodsummaries/relationships-data.dictionary.md): The relationships from [ArtistPeriodSummaries](artistperiodsummaries.md) to other resources.
