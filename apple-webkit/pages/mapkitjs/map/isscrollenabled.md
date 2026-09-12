> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/isscrollenabled](https://developer.apple.com/documentation/mapkitjs/map/isscrollenabled)

# isScrollEnabled

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.

## Declaration

```
get isScrollEnabled(): boolean;
set isScrollEnabled(value: boolean);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

You can programmatically cause the map to scroll when scrolling isn’t in an enabled state by changing the map’s [center](center.md) and [region](region.md) coordinates.

## See Also

### Accessing interaction properties

- [isRotationAvailable](isrotationavailable.md): A Boolean value that indicates whether map rotation is available.
- [isRotationEnabled](isrotationenabled.md): A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
- [isZoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
