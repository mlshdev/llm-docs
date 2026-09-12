> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/isrotationenabled](https://developer.apple.com/documentation/mapkitjs/map/isrotationenabled)

# isRotationEnabled

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.

## Declaration

```
get isRotationEnabled(): boolean;
set isRotationEnabled(value: boolean);
```

<a id="Discussion"></a>

## Discussion

When `isRotationEnabled` is `false`, you can still rotate the map programmatically by using [rotation](rotation.md) or [setRotationAnimated()](setrotationanimated.md).

## See Also

### Accessing interaction properties

- [isRotationAvailable](isrotationavailable.md): A Boolean value that indicates whether map rotation is available.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
- [isZoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.
