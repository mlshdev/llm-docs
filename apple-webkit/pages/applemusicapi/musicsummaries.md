> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicsummaries](https://developer.apple.com/documentation/applemusicapi/musicsummaries)

# MusicSummaries

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The music for the period summary.

## Declaration

```
object MusicSummaries
```

## Properties

- `attributes` — `MusicSummaries.Attributes`: The attributes for the music summaries resource type.
- `href` — `string` (required): A relative location for the music summaries resource.
- `id` — `string` (required): The identifier for the music summaries resource.
- `type` — `string` (required): The type of the resource. This value is always `Music Summaries`.
  **Allowed values:** `music-summaries`
- `views` — `MusicSummaries.Views`: The views for associations between `Music Summaries` and the user’s top content for that period.

## Topics

### Dictionaries

- [MusicSummaries.Attributes](musicsummaries/attributes-data.dictionary.md): The attributes for the music summaries resource type.
- [MusicSummaries.Views](musicsummaries/views-data.dictionary.md): The top albums, artists, and songs that the user listened to for the given period.
