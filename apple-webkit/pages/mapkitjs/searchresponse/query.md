> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchresponse/query](https://developer.apple.com/documentation/mapkitjs/searchresponse/query)

# query

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The query string for performing the search.

## Declaration

```
query: string | SearchAutocompleteResult | null;
```

<a id="Discussion"></a>

## Discussion

This property is empty when you use a [SearchAutocompleteResult](../searchautocompleteresult.md) object to perform the search.

## See Also

### Search response

- [places](places.md): A list of places that match the search query.
- [boundingRegion](boundingregion.md): The region that encloses the places from the search results.
