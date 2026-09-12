> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/circleoverlay/circleoverlayconstructor](https://developer.apple.com/documentation/mapkitjs/circleoverlay/circleoverlayconstructor)

# new CircleOverlay(coordinate, radius, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a circle overlay with a center coordinate, radius, and style options.

## Declaration

```
constructor(
    coordinate: CoordinateData,
    radius: number,
    options?: OverlayOptions,
);
```

## Parameters

- `coordinate`: The required coordinate of the circle’s center.
- `radius`: The circle’s required radius, in meters.
- `options`: An optional object literal of overlay properties for initializing the circle.

<a id="Discussion"></a>

## Discussion

An `options` parameter for a circle overlay resembles the following example:

```javascript
{
    style: new mapkit.Style({
        lineWidth: 2,
        strokeColor: "#999",
        fillColor: "#FFF"
    }),
    data: {
        population: 30500
    },
    enabled: false
}
```

## See Also

### Creating a circle overlay

- [OverlayOptions](../overlayoptions.md): A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.
