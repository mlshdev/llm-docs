> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/perspectivecameracomponent/fieldofviewindegrees

# fieldOfViewInDegrees

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The camera’s total field of view in degrees.

## Declaration

```swift
var fieldOfViewInDegrees: Float
```

<a id="discussion"></a>

## Discussion

This property contains the entire field of view for the camera in degrees.

When you set [fieldOfViewOrientation](fieldofvieworientation.md) to [CameraFieldOfViewOrientation.vertical](../camerafieldofvieworientation/vertical.md), this value sets the vertical field of view for the camera in degrees, and the system automatically calculates the horizontal field of view to fit the aspect ratio of the device’s screen.

This property defaults to `60` degrees.

## See Also

### Setting the field of view

- [fieldOfViewOrientation](fieldofvieworientation.md): The orientation with which the system uses to apply the field-of-view degrees.
