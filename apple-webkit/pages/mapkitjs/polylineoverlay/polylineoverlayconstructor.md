> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/polylineoverlay/polylineoverlayconstructor](https://developer.apple.com/documentation/mapkitjs/polylineoverlay/polylineoverlayconstructor)

# new PolylineOverlay(points, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a polyline overlay with coordinate points and style options.

## Declaration

```
constructor(points: CoordinateData[], options?: OverlayOptions);
```

## Parameters

- `points`: The required points in the polyline as an array of [Coordinate](../coordinate.md).
- `options`: An optional object literal of style options for initializing the polyline.

<a id="Discussion"></a>

## Discussion

The following is an example of the `options` parameter for a polyline overlay:

```javascript
{
    style: new mapkit.Style({
        lineWidth: 2,
        strokeColor: "#F0F"
    })
}
```

## See Also

### Creating a polyline overlay

- [OverlayOptions](../overlayoptions.md): A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.
