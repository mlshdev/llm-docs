> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/musicsummaries/views-data.dictionary/topalbumsview](https://developer.apple.com/documentation/applemusicapi/musicsummaries/views-data.dictionary/topalbumsview)

# MusicSummaries.Views.TopAlbumsView

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The top albums that the user listened to for the given period.

## Declaration

```
object MusicSummaries.Views.TopAlbumsView
```

## Properties

- `data` — `[AlbumPeriodSummaries]` (required): A paginated collection of resources in the view.
- `href` — `string`: A relative location to fetch the view.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources.
