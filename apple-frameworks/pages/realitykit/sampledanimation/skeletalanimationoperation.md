> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation)

# SampledAnimation.SkeletalAnimationOperation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Operations that can be performed on skeletal animations.

## Declaration

```swift
struct SkeletalAnimationOperation
```

## Topics

### Converting to additive animation

- [convertToAdditive(baseAnimation:)](skeletalanimationoperation/converttoadditive%28baseanimation_%29.md): Converts animation to additive format by subtracting a base animation.
- [convertToAdditiveUsingRestPose()](skeletalanimationoperation/converttoadditiveusingrestpose%28%29.md): Converts animation to additive format by subtracting the skeleton’s rest pose.
- [convertToAdditiveUsingFirstSample()](skeletalanimationoperation/converttoadditiveusingfirstsample%28%29.md): Converts animation to additive format by subtracting the first frame.

### Extracting root motion

- [extractRootMotion(jointName:options:lockPosition:)](skeletalanimationoperation/extractrootmotion%28jointname_options_lockposition_%29.md): Extracts root motion from the specified joint.
- [SampledAnimation.SkeletalAnimationOperation.RootMotionOptions](skeletalanimationoperation/rootmotionoptions.md): Options for controlling root motion extraction.

### Removing animation content

- [removeAnimation(for:)](skeletalanimationoperation/removeanimation%28for_%29.md): Removes animation for the specified joint.

## See Also

### Processing skeletal animations

- [processAndCreateAnimation(retargeting:operations:name:)](processandcreateanimation%28retargeting_operations_name_%29.md): Conforms when `Value` is `JointTransforms`. Processes skeletal animation with the specified retargeting and operations.
- [processAndCreateAnimation(for:operations:name:)](processandcreateanimation%28for_operations_name_%29.md): Conforms when `Value` is `JointTransforms`. Processes skeletal animation with the specified operations.
