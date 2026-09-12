> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/polygonoverlay/polygonoverlayconstructor](https://developer.apple.com/documentation/mapkitjs/polygonoverlay/polygonoverlayconstructor)

# new PolygonOverlay(points, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a polygon overlay with an array of points and style options.

## Declaration

```
constructor(
    points: CoordinateData[][] | CoordinateData[],
    options?: OverlayOptions,
);
```

## Parameters

- `points`: The points in the polygon as an array of arrays of [Coordinate](../coordinate.md), or an array of [Coordinate](../coordinate.md). For the latter, MapKit JS autowraps the array with an enclosing array.
- `options`: An optional object literal of options for initializing the polygon.

<a id="Discussion"></a>

## Discussion

The following example shows the `options` parameter for a polygon overlay:

```javascript
{
    style: new mapkit.Style({
        lineWidth: 2,
        strokeColor: "#F00",
        fillColor: "#339"
    }),
    selected: true
}
```

## See Also

### Creating a polygon overlay

- [OverlayOptions](../overlayoptions.md): A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.
