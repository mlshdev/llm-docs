> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton2d/jointlandmarks-3en0x](https://developer.apple.com/documentation/arkit/arskeleton2d/jointlandmarks-3en0x)

# jointLandmarks

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The joint landmarks in normalized coordinates.

## Declaration

```objectivec
@property (nonatomic, readonly) const simd_float2 * jointLandmarks;
```

<a id="Discussion"></a>

## Discussion

The joint landmarks are normalized within the range \[0..1\] in the coordinate space of the current frame’s camera image, where 0 is the upper left, and 1 is the bottom right.

## See Also

### Getting Joint Landmarks

- [landmarkForJointNamed:](landmarkforjointnamed_.md): Returns the location of a joint with a given name.
