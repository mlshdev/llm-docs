> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/convertcoordinatetopointonpage](https://developer.apple.com/documentation/mapkitjs/map/convertcoordinatetopointonpage)

# convertCoordinateToPointOnPage(coordinate)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Converts a coordinate on the map to a point in the page’s coordinate system.

## Declaration

```
convertCoordinateToPointOnPage(coordinate: CoordinateData): DOMPoint;
```

## Parameters

- `coordinate`: The coordinate that displays on the map.

<a id="return-value"></a>

## Return Value

A `DOMPoint` in the page coordinates that corresponds to the provided map `coordinate`.

## See Also

### Converting map coordinates

- [convertPointOnPageToCoordinate()](convertpointonpagetocoordinate.md): Converts a point in page coordinates to the corresponding map coordinate.
