> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor1](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor1)

# new CameraZoomRange(rangeParams)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.23+

Creates an instance of a camera zoom range object with an object literal.

## Declaration

```
constructor(rangeParams: Partial<CameraZoomRangeData>);
```

<a id="Discussion"></a>

## Discussion

Calling the constructor with an [CameraZoomRangeData](../camerazoomrangedata.md) object literal creates a [CameraZoomRange](../camerazoomrange.md) instance that constrains the camera.

Both [minCameraDistance](../camerazoomrangedata/mincameradistance.md) and [maxCameraDistance](../camerazoomrangedata/maxcameradistance.md) must be greater than or equal to `0.` The [minCameraDistance](../camerazoomrangedata/mincameradistance.md) must be lower than or equal to the [maxCameraDistance](../camerazoomrangedata/maxcameradistance.md).

## See Also

### Defining a zoom range

- [CameraZoomRange()](camerazoomrangeconstructor.md): Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.
- [CameraZoomRange()](camerazoomrangeconstructor2.md): Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.
