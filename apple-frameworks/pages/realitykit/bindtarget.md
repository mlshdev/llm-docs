> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget](https://developer.apple.com/documentation/realitykit/bindtarget)

# BindTarget

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A reference to a particular scene, entity, or property that animates.

## Declaration

```swift
enum BindTarget
```

<a id="overview"></a>

## Overview

This structure describes a reference to an animated property. The property may be a transform, collection of joint transforms, an arbitrary named property of an entity, or the property of a nested entity.

For nested entities, the [BindTarget.path(\_:)](bindtarget/path%28__%29.md) case returns a [BindPath](bindpath.md) instance that contains an array of *parts* ([BindPath.Part](bindpath/part.md)). Each part identifies one or more nested, named entities or scenes, followed by the property to animate.

## Topics

### Choosing a bind target

- [BindTarget.internal(\_:)](bindtarget/internal%28__%29.md): A bind target that refers to a framework-provided property.
- [BindTarget.jointTransforms](bindtarget/jointtransforms.md): An option that specifies that the entity’s joint transforms animate.
- [BindTarget.parameter(\_:)](bindtarget/parameter%28__%29.md): Provides a property that animates from the given textual name.
- [BindTarget.path(\_:)](bindtarget/path%28__%29.md): Provides a complex bind path capable of animating additional entities other than the current entity.
- [BindTarget.transform](bindtarget/transform.md): A option that specifies that the target entity’s transform animates.

### Targeting entities and scenes

- [scene(\_:)](bindtarget/scene%28__%29.md): Generates a bind path from a particular scene.
- [BindTarget.ScenePath](bindtarget/scenepath.md): A bind path for a particular scene.
- [anchorEntity(\_:)](bindtarget/anchorentity%28__%29.md): Generates a complex bind path from a particular anchor entity in the scene.
- [entity(\_:)](bindtarget/entity%28__%29.md): Generates a complex bind path from a particular child entity of the current entity.
- [BindTarget.EntityPath](bindtarget/entitypath.md): A bind path context for a particular entity.

### Animatable properties

- [BindTarget.opacity](bindtarget/opacity.md): An option that specifies that the entity’s opacity to animate. Requires that the entity has an OpacityComponent
- [BindTarget.billboardBlendFactor](bindtarget/billboardblendfactor.md)
- [BindTarget.blendShapeWeights](bindtarget/blendshapeweights.md): An option the entity’s blend shape weights animate. Requires that the entity has a BlendShapeWeightsComponent.
- [BindTarget.skeletalPose(\_:)](bindtarget/skeletalpose%28__%29.md): An option that specifies one of the entity’s skeletal poses to animate.
- [BindTarget.blendShapeWeightsAtIndex(\_:)](bindtarget/blendshapeweightsatindex%28__%29.md)
- [BindTarget.blendShapeWeightsWithID(\_:)](bindtarget/blendshapeweightswithid%28__%29.md)
- [material(\_:)](bindtarget/material%28__%29.md): Generates a complex bind path from one of an entity’s materials.
- [BindTarget.MaterialPath](bindtarget/materialpath.md): Material parameters that an animation can target.
- [BindTarget.TextureCoordinateTransformPath](bindtarget/texturecoordinatetransformpath.md): The texture coordinate parameters for a given texture layer that an animation can target.
- [BindTarget.IkSolverPath](bindtarget/iksolverpath.md)

### Binding to root motion

- [BindTarget.rootMotion](bindtarget/rootmotion.md): A target that drives an entity’s root motion.

### Operators

- [==(\_:\_:)](bindtarget/==%28____%29.md): Returns a Boolean value that indicates whether two bind targets are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.
