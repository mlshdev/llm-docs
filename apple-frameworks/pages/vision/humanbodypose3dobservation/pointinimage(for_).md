> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/pointinimage(for:)](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/pointinimage(for:))

# pointInImage(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a 2D point for the joint name you specify, relative to the input image.

## Declaration

```swift
func pointInImage(for jointName: HumanBodyPose3DObservation.JointName) -> NormalizedPoint
```

## Parameters

- `jointName`: The name of the human body joint.

<a id="return-value"></a>

## Return Value

A projection of the 3D position onto the original 2D image in normalized, lower left origin coordinates.
