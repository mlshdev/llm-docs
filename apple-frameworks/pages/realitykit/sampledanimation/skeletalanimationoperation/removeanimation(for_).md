> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation/removeanimation(for:)](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation/removeanimation(for:))

# removeAnimation(for:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes animation for the specified joint.

## Declaration

```swift
static func removeAnimation(for jointName: String) -> SampledAnimation<Value>.SkeletalAnimationOperation
```

## Parameters

- `jointName`: Name of the joint to remove animation from.

<a id="return-value"></a>

## Return Value

A [SampledAnimation.SkeletalAnimationOperation](../skeletalanimationoperation.md) that, when processed, produces a `SampledAnimation<JointTransforms>` with animation removed.
