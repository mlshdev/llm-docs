> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditiveusingrestpose()](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditiveusingrestpose())

# convertToAdditiveUsingRestPose()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Converts animation to additive format by subtracting the skeleton’s rest pose.

## Declaration

```swift
static func convertToAdditiveUsingRestPose() -> SampledAnimation<Value>.SkeletalAnimationOperation
```

<a id="return-value"></a>

## Return Value

A [SampledAnimation.SkeletalAnimationOperation](../skeletalanimationoperation.md) that, when processed, produces a `SampledAnimation<JointTransforms>` in additive format.

<a id="discussion"></a>

## Discussion

Creates a delta animation that represents the difference between this animation and the skeleton’s rest pose. Requires a skeleton to be provided to [processAndCreateAnimation(for:operations:name:)](../processandcreateanimation%28for_operations_name_%29.md).

## See Also

### Converting to additive animation

- [convertToAdditive(baseAnimation:)](converttoadditive%28baseanimation_%29.md): Converts animation to additive format by subtracting a base animation.
- [convertToAdditiveUsingFirstSample()](converttoadditiveusingfirstsample%28%29.md): Converts animation to additive format by subtracting the first frame.
