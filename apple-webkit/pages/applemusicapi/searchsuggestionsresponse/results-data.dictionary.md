> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary](https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary)

# SearchSuggestionsResponse.Results

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object that represents the results of a search suggestions query.

## Declaration

```
object SearchSuggestionsResponse.Results
```

## Properties

- `suggestions` — `[*]` (required): An array of possible valid search queries determined from the search suggestion.
  **Allowed types:** `SearchSuggestionsResponse.Results.TermSuggestion`, `SearchSuggestionsResponse.Results.TopResultSuggestion`

## Topics

### Related Objects

- [SearchSuggestionsResponse.Results.TermSuggestion](results-data.dictionary/termsuggestion.md): A suggested search term from a search suggestion response.
- [SearchSuggestionsResponse.Results.TopResultSuggestion](results-data.dictionary/topresultsuggestion.md): A suggested popular result for similar search prefix terms.
