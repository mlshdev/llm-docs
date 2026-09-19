> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/humanbodyposeobservation/righthand

# rightHand

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The observed right hand.

## Declaration

```swift
let rightHand: HumanHandPoseObservation?
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [leftHand](lefthand.md): The observed left hand.
- [HumanHandPoseObservation](../humanhandposeobservation.md): An observation that provides the hand points the analysis recognizes.
- [keypoints](keypoints.md): A multi-array compatible with Core ML that contains normalized point coordinates and confidence scores.
