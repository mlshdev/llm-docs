> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/iszoomenabled](https://developer.apple.com/documentation/mapkitjs/map/iszoomenabled)

# isZoomEnabled

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control.

## Declaration

```
get isZoomEnabled(): boolean;
set isZoomEnabled(value: boolean);
```

<a id="Discussion"></a>

## Discussion

Pinch-to-zoom with a trackpad requires browser touch event support. You can zoom the map programmatically when zoom isn’t in an enabled state by changing the [region](region.md) or [visibleMapRect](visiblemaprect.md).

## See Also

### Accessing interaction properties

- [isRotationAvailable](isrotationavailable.md): A Boolean value that indicates whether map rotation is available.
- [isRotationEnabled](isrotationenabled.md): A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user can cause the map to scroll with a pointing device or with gestures on a touchscreen.
