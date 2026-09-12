> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodyposeobservation/keypoints](https://developer.apple.com/documentation/vision/humanbodyposeobservation/keypoints)

# keypoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A multi-array compatible with Core ML that contains normalized point coordinates and confidence scores.

## Declaration

```swift
var keypoints: MLMultiArray { get throws }
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [leftHand](lefthand.md): The observed left hand.
- [rightHand](righthand.md): The observed right hand.
- [HumanHandPoseObservation](../humanhandposeobservation.md): An observation that provides the hand points the analysis recognizes.
