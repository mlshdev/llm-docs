> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanhandposeobservation/keypoints](https://developer.apple.com/documentation/vision/humanhandposeobservation/keypoints)

# keypoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The keypoints for the observation.

## Declaration

```swift
var keypoints: MLMultiArray { get throws }
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [chirality](chirality-swift.property.md): The chirality, or handedness, of a pose.
- [HumanHandPoseObservation.Chirality](chirality-swift.enum.md): The hand sidedness of a pose.
