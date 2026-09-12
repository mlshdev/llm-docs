> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation/yaw](https://developer.apple.com/documentation/vision/faceobservation/yaw)

# yaw

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The yaw angle of a face.

## Declaration

```swift
let yaw: Measurement<UnitAngle>
```

<a id="Discussion"></a>

## Discussion

This value indicates the rotational angle of the face around the y-axis.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [FaceObservation.Landmarks2D](landmarks2d.md): A collection of facial features that a request detects.
- [landmarks](landmarks.md): The facial features of the detected face.
- [pitch](pitch.md): The pitch angle of a face.
- [roll](roll.md): The roll angle of a face.
