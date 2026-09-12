> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/chartresponse/results-data.dictionary/playlistschart](https://developer.apple.com/documentation/applemusicapi/chartresponse/results-data.dictionary/playlistschart)

# ChartResponse.Results.PlaylistsChart

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The playlists results of a chart.

## Declaration

```
object ChartResponse.Results.PlaylistsChart
```

## Properties

- `chart` — `string` (required): The unique name of the chart to use when fetching a specific chart.
- `data` — `[Playlists]` (required): The popularity-ordered playlists for the chart.
- `href` — `string`: A relative location to fetch the chart results directly.
- `name` — `string` (required): The localized display name for the chart.
- `next` — `string`: A relative cursor to fetch the next paginated results for the chart if more exist.

## See Also

### Related Objects

- [ChartResponse.Results.AlbumsChart](albumschart.md): The albums results of a chart.
- [ChartResponse.Results.MusicVideosChart](musicvideoschart.md): The music videos results of a chart.
- [ChartResponse.Results.SongsChart](songschart.md): The songs results of a chart.
