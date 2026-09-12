> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton2d/landmark(for:)](https://developer.apple.com/documentation/arkit/arskeleton2d/landmark(for:))

# landmark(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the location of a joint with a given name.

## Declaration

```swift
@nonobjc func landmark(for jointName: ARSkeleton.JointName) -> simd_float2?
```

<a id="Discussion"></a>

## Discussion

Joint landmarks are normalized within the range \[0..1\] and are in the coordinate space of the current frame’s camera image, where 0 is the upper left, and 1 is the bottom right.

## See Also

### Getting Joint Landmarks

- [jointLandmarks](jointlandmarks-12vkw.md): The joint landmarks in normalized coordinates.
