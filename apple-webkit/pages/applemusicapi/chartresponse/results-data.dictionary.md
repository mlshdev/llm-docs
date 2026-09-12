> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/chartresponse/results-data.dictionary](https://developer.apple.com/documentation/applemusicapi/chartresponse/results-data.dictionary)

# ChartResponse.Results

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A mapping of a requested type to an array of charts.

## Declaration

```
object ChartResponse.Results
```

## Properties

- `albums` — `[ChartResponse.Results.AlbumsChart]` (required): The albums results of a chart.
- `music-videos` — `[ChartResponse.Results.MusicVideosChart]` (required): The music videos results of a chart.
- `playlists` — `[ChartResponse.Results.PlaylistsChart]` (required): The playlists results of a chart.
- `songs` — `[ChartResponse.Results.SongsChart]` (required): The songs results of a chart.

## Topics

### Related Objects

- [ChartResponse.Results.AlbumsChart](results-data.dictionary/albumschart.md): The albums results of a chart.
- [ChartResponse.Results.MusicVideosChart](results-data.dictionary/musicvideoschart.md): The music videos results of a chart.
- [ChartResponse.Results.PlaylistsChart](results-data.dictionary/playlistschart.md): The playlists results of a chart.
- [ChartResponse.Results.SongsChart](results-data.dictionary/songschart.md): The songs results of a chart.
