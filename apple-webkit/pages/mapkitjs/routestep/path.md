> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/routestep/path](https://developer.apple.com/documentation/mapkitjs/routestep/path)

# path

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of coordinate objects representing the path of the route segment.

## Declaration

```
path: Coordinate[];
```

<a id="Discussion"></a>

## Discussion

An array of [Coordinate](../coordinate.md) objects that traces the route segment. To render the route segment on a map, set the [points](../polylineoverlay/points.md) property of [PolylineOverlay](../polylineoverlay.md) to this array.
