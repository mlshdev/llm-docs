> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchresponse/boundingregion](https://developer.apple.com/documentation/mapkitjs/searchresponse/boundingregion)

# boundingRegion

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The region that encloses the places from the search results.

## Declaration

```
boundingRegion: CoordinateRegion | null;
```

<a id="Discussion"></a>

## Discussion

This property isn’t present if there aren’t any results.

## See Also

### Search response

- [places](places.md): A list of places that match the search query.
- [query](query.md): The query string for performing the search.
