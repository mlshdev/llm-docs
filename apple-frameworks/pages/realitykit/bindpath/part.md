> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindpath/part](https://developer.apple.com/documentation/realitykit/bindpath/part)

# BindPath.Part

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An individual piece of a larger path that refers to the target of an animation.

## Declaration

```swift
enum Part
```

<a id="overview"></a>

## Overview

Path-based instances of [bindTarget](../animationdefinition/bindtarget.md), or those identified by the [BindTarget.path(\_:)](../bindtarget/path%28__%29.md) call, consist of one or more components identified by these enumeration options.

For example, the succession of [BindPath.Part](part.md) calls in the following code results in a path with a [parts](parts.md) array that contains three components: `entityA`, `entityB`, and `myInt`.

```swift
let target3: BindTarget = .entity("entityA").entity("entityB").parameter("myInt")
```

## Topics

### Choosing the path component

- [BindPath.Part.anchorEntity(\_:)](part/anchorentity%28__%29.md): A path component for the scene’s anchor entity.
- [BindPath.Part.entity(\_:)](part/entity%28__%29.md): A path component for a nested entity.
- [BindPath.Part.jointTransforms](part/jointtransforms.md): A path component to animate joint transforms.
- [BindPath.Part.parameter(\_:)](part/parameter%28__%29.md): A path component to animate a named parameter.
- [BindPath.Part.scene(\_:)](part/scene%28__%29.md): A path component for a nested scene.
- [BindPath.Part.transform](part/transform.md): A path component to animate a transform.

### Accessing path parts

- [BindPath.Part.rootMotion](part/rootmotion.md): Identifies a sampled transform animation as root motion for its target entity.

### Operators

- [==(\_:\_:)](part/==%28____%29.md): Returns a Boolean value that indicates whether two components of a bind path are equal.

### Enumeration Cases

- [BindPath.Part.billboardBlendFactor](part/billboardblendfactor.md)
- [BindPath.Part.blendShapeWeights](part/blendshapeweights.md): An option the entity’s blend shape weights animate. Requires that the entity has a BlendShapeWeightsComponent. Can be indexed by blend shape index or by blend shape name. Default is by index 0.
- [BindPath.Part.blendShapeWeightsAtIndex(\_:)](part/blendshapeweightsatindex%28__%29.md)
- [BindPath.Part.blendShapeWeightsWithID(\_:)](part/blendshapeweightswithid%28__%29.md)
- [BindPath.Part.ikConstraintLookAtTarget(\_:)](part/ikconstraintlookattarget%28__%29.md): A path component to an IK solver’s constraint target look at position.
- [BindPath.Part.ikConstraintTarget(\_:)](part/ikconstrainttarget%28__%29.md): A path component to an IK solver’s constraint target transform.
- [BindPath.Part.ikSolver(\_:)](part/iksolver%28__%29.md): A path component to an IK solver instance.
- [BindPath.Part.material(\_:)](part/material%28__%29.md): A path component to animate a material property.
- [BindPath.Part.materialParameter(\_:)](part/materialparameter%28__%29.md): A path component to name a material parameter to animate
- [BindPath.Part.opacity](part/opacity.md): An path component to animate an opacity. Requires that the entity has an OpacityComponent
- [BindPath.Part.skeletalPose(\_:)](part/skeletalpose%28__%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Composing a property identifier

- [parts](parts.md): An array of the individual components of a complete bind path.
