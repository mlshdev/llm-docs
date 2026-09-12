> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/searchresponse/results-data.dictionary/stationssearchresult](https://developer.apple.com/documentation/applemusicapi/searchresponse/results-data.dictionary/stationssearchresult)

# SearchResponse.Results.StationsSearchResult

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object containing a stations’ search result.

## Declaration

```
object SearchResponse.Results.StationsSearchResult
```

## Properties

- `data` — `[Stations]` (required): The resources for the search result.
- `href` — `string`: The relative location to fetch the search result.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the result, if more exist.

## See Also

### Related Objects

- [SearchResponse.Results.ActivitiesSearchResult](activitiessearchresult.md): An object containing an activities’ search result.
- [SearchResponse.Results.AlbumsSearchResult](albumssearchresult.md): An object containing an albums’ search result.
- [SearchResponse.Results.AppleCuratorsSearchResult](applecuratorssearchresult.md): An object containing the Apple curators’ search result.
- [SearchResponse.Results.ArtistsSearchResult](artistssearchresult.md): An object containing an artists’ search result.
- [SearchResponse.Results.CuratorsSearchResult](curatorssearchresult.md): An object containing a curators’ search result.
- [SearchResponse.Results.MusicVideosSearchResult](musicvideossearchresult.md): An object containing a music videos’ search result.
- [SearchResponse.Results.PlaylistsSearchResult](playlistssearchresult.md): An object containing a playlists’ search result.
- [SearchResponse.Results.RecordLabelsSearchResult](recordlabelssearchresult.md): An object containing a record labels’ search result.
- [SearchResponse.Results.SongsSearchResult](songssearchresult.md): An object containing a songs’ search result.
- [SearchResponse.Results.TopResultsSearchResult](topresultssearchresult.md): An object containing a top results’ search result.
