> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor2](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor2)

# new CameraZoomRange(min, max)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.23+

Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.

## Declaration

```
constructor(min: number, max: number);
```

<a id="Discussion"></a>

## Discussion

Calling the constructor with minimal camera distance and maximum camera distance creates a [CameraZoomRange](../camerazoomrange.md) instance that constrains the camera.

Both `minCameraDistance` and `maxCameraDistance` must be greater than or equal to `0.` The `minCameraDistance` must be less than or equal to the `maxCameraDistance`.

## See Also

### Defining a zoom range

- [CameraZoomRange()](camerazoomrangeconstructor.md): Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.
- [CameraZoomRange()](camerazoomrangeconstructor1.md): Creates an instance of a camera zoom range object with an object literal.
