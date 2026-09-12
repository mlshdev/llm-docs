> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perspectivecameracomponent/fieldofvieworientation](https://developer.apple.com/documentation/realitykit/perspectivecameracomponent/fieldofvieworientation)

# fieldOfViewOrientation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The orientation with which the system uses to apply the field-of-view degrees.

## Declaration

```swift
var fieldOfViewOrientation: CameraFieldOfViewOrientation
```

<a id="discussion"></a>

## Discussion

The value of this property determines the orientation that the system uses to apply the [fieldOfViewInDegrees](fieldofviewindegrees.md) value.

This property defaults to [CameraFieldOfViewOrientation.vertical](../camerafieldofvieworientation/vertical.md).

## See Also

### Setting the field of view

- [fieldOfViewInDegrees](fieldofviewindegrees.md): The camera’s total field of view in degrees.
