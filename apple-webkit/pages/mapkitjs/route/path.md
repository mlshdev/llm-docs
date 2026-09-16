> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/route/path

# path

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+ (deprecated in 5.4)

An array of coordinate objects representing the path of the route.

> Removed in MapKit JS 6.0.0. Use [polyline](polyline.md) instead of [path](path.md).

## Declaration

```
get path(): Coordinate[][];
```

<a id="Discussion"></a>

## Discussion

An array of coordinates that reflect the complete path of the route, including all of its steps. To render this route on a map, set the [points](../polylineoverlay/points.md) property of a [PolylineOverlay](../polylineoverlay.md) to this array.
