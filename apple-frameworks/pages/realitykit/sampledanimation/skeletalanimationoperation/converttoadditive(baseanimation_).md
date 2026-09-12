> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditive(baseanimation:)](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation/converttoadditive(baseanimation:))

# convertToAdditive(baseAnimation:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Converts animation to additive format by subtracting a base animation.

## Declaration

```swift
static func convertToAdditive(baseAnimation: AnimationResource) -> SampledAnimation<Value>.SkeletalAnimationOperation
```

## Parameters

- `baseAnimation`: Base animation to subtract.

<a id="return-value"></a>

## Return Value

A [SampledAnimation.SkeletalAnimationOperation](../skeletalanimationoperation.md) that, when processed, produces a `SampledAnimation<JointTransforms>` in additive format.

<a id="discussion"></a>

## Discussion

Creates a delta animation that represents the difference between this animation and the provided base animation. You can layer the resulting animation on top of other animations using additive blending.

If the base animation has more samples than the target animation, the function subtracts the last sample from each remaining sample in the target.

The function throws an error if the base and target animations do not have the same frame interval (sample rate).

## See Also

### Converting to additive animation

- [convertToAdditiveUsingRestPose()](converttoadditiveusingrestpose%28%29.md): Converts animation to additive format by subtracting the skeleton’s rest pose.
- [convertToAdditiveUsingFirstSample()](converttoadditiveusingfirstsample%28%29.md): Converts animation to additive format by subtracting the first frame.
