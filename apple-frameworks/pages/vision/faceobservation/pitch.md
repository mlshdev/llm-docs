> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation/pitch](https://developer.apple.com/documentation/vision/faceobservation/pitch)

# pitch

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The pitch angle of a face.

## Declaration

```swift
let pitch: Measurement<UnitAngle>
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the x-axis.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [FaceObservation.Landmarks2D](landmarks2d.md): A collection of facial features that a request detects.
- [landmarks](landmarks.md): The facial features of the detected face.
- [roll](roll.md): The roll angle of a face.
- [yaw](yaw.md): The yaw angle of a face.
