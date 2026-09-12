> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton2d/landmarkforjointnamed:](https://developer.apple.com/documentation/arkit/arskeleton2d/landmarkforjointnamed:)

# landmarkForJointNamed:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Returns the location of a joint with a given name.

## Declaration

```objectivec
- (simd_float2) landmarkForJointNamed:(ARSkeletonJointName) jointName;
```

<a id="Discussion"></a>

## Discussion

Joint landmarks are normalized within the range \[0..1\] and are in the coordinate space of the current frame’s camera image, where 0 is the upper left, and 1 is the bottom right.

## See Also

### Getting Joint Landmarks

- [jointLandmarks](jointlandmarks-3en0x.md): The joint landmarks in normalized coordinates.
