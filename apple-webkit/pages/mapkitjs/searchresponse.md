> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchresponse](https://developer.apple.com/documentation/mapkitjs/searchresponse)

# SearchResponse

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

The result of a search, including the original search query, the bounding region, and a list of places that match the query.

## Declaration

```
interface SearchResponse
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

The search callback function provides the search response in its data parameter. An object parsed from server-returned JSON, `data` contains a [query](searchresponse/query.md) and a [boundingRegion](searchresponse/boundingregion.md).

## Topics

### Search response

- [places](searchresponse/places.md): A list of places that match the search query.
- [query](searchresponse/query.md): The query string for performing the search.
- [boundingRegion](searchresponse/boundingregion.md): The region that encloses the places from the search results.

## See Also

### Performing a search

- [search()](search/search.md): Retrieves the results of a search query.
- [SearchDelegate](searchdelegate.md): An object or callback function the framework calls when performing a search or an autocomplete request.
- [SearchOptions](searchoptions.md): An object that contains options to adjust a search.
