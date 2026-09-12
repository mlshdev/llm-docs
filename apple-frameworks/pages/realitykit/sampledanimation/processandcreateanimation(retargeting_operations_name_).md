> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/processandcreateanimation(retargeting:operations:name:)](https://developer.apple.com/documentation/realitykit/sampledanimation/processandcreateanimation(retargeting:operations:name:))

# processAndCreateAnimation(retargeting:operations:name:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Processes skeletal animation with the specified retargeting and operations.

## Declaration

```swift
func processAndCreateAnimation(retargeting config: RetargetingConfiguration, operations: [SampledAnimation<Value>.SkeletalAnimationOperation] = [], name: String = "") throws -> any AnimationDefinition
```

## Parameters

- `config`: The skeletal retargeting configuration to use.
- `operations`: Operations to perform on the animation. If empty, only retargeting is performed.
- `name`: Name for the processed animation.

<a id="return-value"></a>

## Return Value

An [AnimationDefinition](../animationdefinition.md) containing the processed animation. If root motion extraction is performed, returns an [AnimationGroup](../animationgroup.md) containing both the skeletal animation (`SampledAnimation<JointTransforms>`) and extracted root motion (`SampledAnimation<Transform>`). Otherwise returns a `SampledAnimation<JointTransforms>`.

<a id="discussion"></a>

## Discussion

Retargets the instance animation using the provided retargeting configuration and applies a series of skeletal animation processing operations to create a new animation definition. The function executes operations in the order specified.

> **Throws**

> An error if validation fails. All errors provide descriptive messages via their `localizedDescription` property. Common validation failures include:
>
> - Duplicate operation types in a single call (e.g., two [extractRootMotion(jointName:options:lockPosition:)](skeletalanimationoperation/extractrootmotion%28jointname_options_lockposition_%29.md) operations).
> - Both [extractRootMotion(jointName:options:lockPosition:)](skeletalanimationoperation/extractrootmotion%28jointname_options_lockposition_%29.md) and [removeAnimation(for:)](skeletalanimationoperation/removeanimation%28for_%29.md) operations in the same call.
> - Operations requiring a skeleton when skeleton parameter is nil.
> - Joint name does not exist in the skeleton for root motion extraction or removal.
> - Base animation has a different sample rate than the source animation for [convertToAdditive(baseAnimation:)](skeletalanimationoperation/converttoadditive%28baseanimation_%29.md).

## See Also

### Processing skeletal animations

- [processAndCreateAnimation(for:operations:name:)](processandcreateanimation%28for_operations_name_%29.md): Conforms when `Value` is `JointTransforms`. Processes skeletal animation with the specified operations.
- [SampledAnimation.SkeletalAnimationOperation](skeletalanimationoperation.md): Conforms when `Value` is `JointTransforms`. Operations that can be performed on skeletal animations.
