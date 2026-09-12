> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/retargetingconfiguration](https://developer.apple.com/documentation/realitykit/retargetingconfiguration)

# RetargetingConfiguration

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A configuration for retargeting skeletal animations between different skeletons.

## Declaration

```swift
class RetargetingConfiguration
```

<a id="overview"></a>

## Overview

[RetargetingConfiguration](retargetingconfiguration.md) enables the transfer of animations from one skeleton to another, automatically mapping joints and adapting poses to accommodate different skeletal structures. This is particularly useful for applying animations across different character models or creatures.

<a id="Usage"></a>

## Usage

Create configurations using the static factory methods for common skeleton types:

- [automatchBiped(\_:to:jointOffsets:)](retargetingconfiguration/automatchbiped%28__to_jointoffsets_%29.md) for humanoid/bipedal characters
- [automatchQuadruped(\_:sourceTransform:to:targetTransform:jointOffsets:)](retargetingconfiguration/automatchquadruped%28__sourcetransform_to_targettransform_jointoffsets_%29.md) for four-legged creatures

<a id="Example"></a>

## Example

```swift
do {
    // Basic biped retargeting
    let config = try RetargetingConfiguration.automatchBiped(
        sourceCharacterSkeleton,
        to: targetCharacterSkeleton
    )

    // With joint offset adjustments applied during configuration creation
    let jointOffsets: [String: simd_quatf] = [
        "LeftShoulder": simd_quatf(angle: 0.1, axis: simd_float3(0, 1, 0)),
        "RightShoulder": simd_quatf(angle: -0.1, axis: simd_float3(0, 1, 0))
    ]
    let configWithOffsets = try RetargetingConfiguration.automatchBiped(
        sourceCharacterSkeleton,
        to: targetCharacterSkeleton,
        jointOffsets: jointOffsets
    )
} catch {
    print("Failed to create retargeting configuration: \(error.localizedDescription)")
}
```

<a id="Performance-Considerations"></a>

## Performance Considerations

- Configuration creation is computationally expensive and should be cached when possible.
- The automatic matching algorithm analyzes skeleton hierarchies to establish joint correspondences.
- Joint offsets are baked into the configuration during creation, not applied at runtime.

## Topics

### Creating a configuration

- [automatchBiped(\_:sourceTransform:to:targetTransform:jointOffsets:)](retargetingconfiguration/automatchbiped%28__sourcetransform_to_targettransform_jointoffsets_%29.md): Creates a retargeting configuration for bipedal characters with custom root transforms.
- [automatchBiped(\_:to:jointOffsets:)](retargetingconfiguration/automatchbiped%28__to_jointoffsets_%29.md): Creates a retargeting configuration for bipedal characters using automatic joint matching.
- [automatchQuadruped(\_:sourceTransform:to:targetTransform:jointOffsets:)](retargetingconfiguration/automatchquadruped%28__sourcetransform_to_targettransform_jointoffsets_%29.md): Creates a retargeting configuration for quadrupedal characters using automatic joint matching.

### Accessing the skeletons

- [sourceSkeleton](retargetingconfiguration/sourceskeleton.md): The skeleton the source animation targets.
- [targetSkeleton](retargetingconfiguration/targetskeleton.md): The skeleton the retargeting animates.

## See Also

### Skeletons and retargeting

- [SkeletonResource](skeletonresource.md): A self-contained skeleton asset for animating characters and articulated objects.
