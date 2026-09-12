> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary/topresultsuggestion](https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary/topresultsuggestion)

# SearchSuggestionsResponse.Results.TopResultSuggestion

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A suggested popular result for similar search prefix terms.

## Declaration

```
object SearchSuggestionsResponse.Results.TopResultSuggestion
```

## Properties

- `content` — `(Activities | Albums | AppleCurators | Artists | Curators | MusicVideos | Playlists | RecordLabels | Songs | Stations)` (required): The actual resource for the suggested content.
  **Allowed types:** `Activities`, `Albums`, `AppleCurators`, `Artists`, `Curators`, `MusicVideos`, `Playlists`, `RecordLabels`, `Songs`, `Stations`
- `kind` — `string` (required): The kind of suggestion.
  **Allowed values:** `topResults`

## See Also

### Related Objects

- [SearchSuggestionsResponse.Results.TermSuggestion](termsuggestion.md): A suggested search term from a search suggestion response.
