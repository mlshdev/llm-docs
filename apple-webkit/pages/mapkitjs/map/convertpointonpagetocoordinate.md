> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/convertpointonpagetocoordinate](https://developer.apple.com/documentation/mapkitjs/map/convertpointonpagetocoordinate)

# convertPointOnPageToCoordinate(point)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Converts a point in page coordinates to the corresponding map coordinate.

## Declaration

```
convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;
```

## Parameters

- `point`: A point in the page’s coordinate system, such as `new DOMPoint(event.pageX, event.pageY),` when handling a mouse event.

<a id="return-value"></a>

## Return Value

A [Coordinate](../coordinate.md) in the map at the provided `DOMPoint` of the page.

## See Also

### Converting map coordinates

- [convertCoordinateToPointOnPage()](convertcoordinatetopointonpage.md): Converts a coordinate on the map to a point in the page’s coordinate system.
