> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchdelegate](https://developer.apple.com/documentation/mapkitjs/searchdelegate)

# SearchDelegate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Type  
**Availability:** MapKit JS 5.0+

An object or callback function the framework calls when performing a search or an autocomplete request.

## Declaration

```
type SearchDelegate<
    T extends SearchResponse | SearchAutocompleteResponse =
        | SearchResponse
        | SearchAutocompleteResponse,
> =
    | {
          searchDidError: (error: Error) => void;
          searchDidComplete: (result: SearchResponse) => void;
          autocompleteDidError: (error: Error) => void;
          autocompleteDidComplete: (result: SearchAutocompleteResponse) => void;
      }
    | ((error: Error | null, result: T | null) => void);
```

<a id="discussion"></a>

## Discussion

You can also pass an object to the [search()](search/search.md) and [autocomplete()](search/autocomplete.md) methods instead of a search delegate callback function. A delegate object can include the following methods:

- `searchDidComplete`. Upon successful completion of a search request, this method returns a data object that’s the same as the one that passes to the search callback function.
- `searchDidError`. The system calls this when the search request fails.
- `autocompleteDidComplete`. When an autocomplete request successfully completes, this method returns a `data` array that’s the same as the one that passes to the autocomplete callback function.
- `autocompleteDidError`. The system invokes this when an autocomplete request fails.

## See Also

### Performing a search

- [search()](search/search.md): Retrieves the results of a search query.
- [SearchOptions](searchoptions.md): An object that contains options to adjust a search.
- [SearchResponse](searchresponse.md): The result of a search, including the original search query, the bounding region, and a list of places that match the query.
