> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor](https://developer.apple.com/documentation/mapkitjs/camerazoomrange/camerazoomrangeconstructor)

# new CameraZoomRange()

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.23+

Constructs an instance of a camera zoom range object with no minimum or maximum camera distance.

## Declaration

```
constructor();
```

<a id="Discussion"></a>

## Discussion

The zoom range describes the minimum and maximum camera distance in meters.

> **Note**

> Calling the constructor with no arguments creates a [CameraZoomRange](../camerazoomrange.md) instance that doesn’t constrain the camera.

## See Also

### Defining a zoom range

- [CameraZoomRange()](camerazoomrangeconstructor1.md): Creates an instance of a camera zoom range object with an object literal.
- [CameraZoomRange()](camerazoomrangeconstructor2.md): Creates an instance of a camera zoom range object with the specified numeric arguments that specify minimum and maximum camera distances.
