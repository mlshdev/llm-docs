> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary/termsuggestion](https://developer.apple.com/documentation/applemusicapi/searchsuggestionsresponse/results-data.dictionary/termsuggestion)

# SearchSuggestionsResponse.Results.TermSuggestion

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A suggested search term from a search suggestion response.

## Declaration

```
object SearchSuggestionsResponse.Results.TermSuggestion
```

## Properties

- `displayTerm` — `string` (required): A potentially censored term to display to the user to select from. Use the `searchTerm` value for the actual search.
- `kind` — `string` (required): The kind of suggestion.
  **Allowed values:** `terms`
- `searchTerm` — `string` (required): The term to use as a search input when using this suggestion.

## See Also

### Related Objects

- [SearchSuggestionsResponse.Results.TopResultSuggestion](topresultsuggestion.md): A suggested popular result for similar search prefix terms.
