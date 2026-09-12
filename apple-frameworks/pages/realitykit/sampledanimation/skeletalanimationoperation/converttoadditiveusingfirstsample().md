> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditiveusingfirstsample()](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditiveusingfirstsample())

# convertToAdditiveUsingFirstSample()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Converts animation to additive format by subtracting the first frame.

## Declaration

```swift
static func convertToAdditiveUsingFirstSample() -> SampledAnimation<Value>.SkeletalAnimationOperation
```

<a id="return-value"></a>

## Return Value

A [SampledAnimation.SkeletalAnimationOperation](../skeletalanimationoperation.md) that, when processed, produces a `SampledAnimation<JointTransforms>` in additive format.

<a id="discussion"></a>

## Discussion

Creates a delta animation that represents the difference between each frame and the animation’s first frame. Useful for creating relative motion from absolute animation.

## See Also

### Converting to additive animation

- [convertToAdditive(baseAnimation:)](converttoadditive%28baseanimation_%29.md): Converts animation to additive format by subtracting a base animation.
- [convertToAdditiveUsingRestPose()](converttoadditiveusingrestpose%28%29.md): Converts animation to additive format by subtracting the skeleton’s rest pose.
