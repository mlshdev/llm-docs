> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/animationevaluation-swift.struct](https://developer.apple.com/documentation/realitykit/skeletonresource/animationevaluation-swift.struct)

# SkeletonResource.AnimationEvaluation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A bundle of additional animation-related skeletal data the runtime consumes when evaluating animations against this skeleton.

## Declaration

```swift
struct AnimationEvaluation
```

<a id="overview"></a>

## Overview

Provided at construction time and immutable for the lifetime of the resource. Bake all the supplemental data the skeleton needs into one `AnimationEvaluation` value and pass it to `SkeletonResource(named:rootJoint:animationEvaluation:)`.

## Topics

### Creating an evaluation

- [init(ikResources:blendMasks:)](animationevaluation-swift.struct/init%28ikresources_blendmasks_%29.md): Creates an `AnimationEvaluation` bundle with the given IK resources and blend masks.

### Configuring the evaluation

- [ikResources](animationevaluation-swift.struct/ikresources.md): The IK resources associated with the skeleton.
- [blendMasks](animationevaluation-swift.struct/blendmasks.md): The blend masks associated with the skeleton.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring animation evaluation

- [animationEvaluation](animationevaluation-swift.property.md): Animation-evaluation data baked into this resource at construction time.
- [SkeletonResource.BlendMask](blendmask.md): Describes a single blend mask for selective animation control.
