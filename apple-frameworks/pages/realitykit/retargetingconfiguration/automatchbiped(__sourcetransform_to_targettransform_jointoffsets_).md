> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/retargetingconfiguration/automatchbiped(_:sourcetransform:to:targettransform:jointoffsets:)](https://developer.apple.com/documentation/realitykit/retargetingconfiguration/automatchbiped(_:sourcetransform:to:targettransform:jointoffsets:))

# automatchBiped(\_:sourceTransform:to:targetTransform:jointOffsets:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a retargeting configuration for bipedal characters with custom root transforms.

## Declaration

```swift
static func automatchBiped(_ sourceSkeleton: SkeletonResource, sourceTransform: Transform = .identity, to targetSkeleton: SkeletonResource, targetTransform: Transform = .identity, jointOffsets: [String : simd_quatf] = [:]) throws -> RetargetingConfiguration
```

## Parameters

- `sourceSkeleton`: The skeleton of the animation to retarget.
- `sourceTransform`: Transform applied to the source skeleton’s root during matching (defaults to identity).
- `targetSkeleton`: The skeleton that will receive the re-targeted animation.
- `targetTransform`: Transform applied to the target skeleton’s root during matching (defaults to identity).
- `jointOffsets`: Optional quaternion offsets applied to specific joints during configuration creation. Keys must match joint names in the target skeleton. The function applies offsets on top of the automatically detected joint correspondences and bakes them into the configuration.

<a id="return-value"></a>

## Return Value

A configured retargeting instance ready for animation processing.

<a id="discussion"></a>

## Discussion

This overload allows you to specify custom transforms for the root bones of both skeletons, which is useful when the characters are positioned or oriented differently in their bind poses. The function applies the transforms during the automatic matching process to establish proper correspondences.

The automatic matching algorithm has the same joint requirements and behavior as [automatchBiped(\_:to:jointOffsets:)](automatchbiped%28__to_jointoffsets_%29.md).

<a id="Example"></a>

## Example

```swift
do {
    // Source character facing +Z, target facing +X
    let sourceTransform = Transform(rotation: simd_quatf(angle: 0, axis: simd_float3(0, 1, 0)))
    let targetTransform = Transform(rotation: simd_quatf(angle: .pi/2, axis: simd_float3(0, 1, 0)))

    let config = try RetargetingConfiguration.automatchBiped(
        sourceSkeleton,
        sourceTransform: sourceTransform,
        to: targetSkeleton,
        targetTransform: targetTransform
    )
} catch {
    print("Failed to create retargeting configuration: \(error.localizedDescription)")
}
```

> **Throws**

> An error if configuration creation fails. All errors provide descriptive messages via their `localizedDescription` property. Common failures include:
>
> - A joint offset was specified for a joint name that doesn’t exist in the target skeleton.
> - The algorithm could not identify required joints in one or both skeletons.
> - Joint identification or rig generation failed.

## See Also

### Creating a configuration

- [automatchBiped(\_:to:jointOffsets:)](automatchbiped%28__to_jointoffsets_%29.md): Creates a retargeting configuration for bipedal characters using automatic joint matching.
- [automatchQuadruped(\_:sourceTransform:to:targetTransform:jointOffsets:)](automatchquadruped%28__sourcetransform_to_targettransform_jointoffsets_%29.md): Creates a retargeting configuration for quadrupedal characters using automatic joint matching.
