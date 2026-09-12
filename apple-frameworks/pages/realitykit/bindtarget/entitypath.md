> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/entitypath](https://developer.apple.com/documentation/realitykit/bindtarget/entitypath)

# BindTarget.EntityPath

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A bind path context for a particular entity.

## Declaration

```swift
struct EntityPath
```

<a id="overview"></a>

## Overview

This structure references all the animated properties of an entity.

To access the animated properties of one of the entity’s children, call [entity(\_:)](entitypath/entity%28__%29.md) and pass in the child’s name.

## Topics

### Accessing a bind target

- [jointTransforms](entitypath/jointtransforms.md): A bind target for the entity’s joint transforms.
- [transform](entitypath/transform.md): A bind target for the entity’s transform.
- [self](entitypath/self.md): A bind target for the entity.
- [parameter(\_:)](entitypath/parameter%28__%29.md): Provides a bind target for a particular animated property.

### Accessing child-entity paths

- [entity(\_:)](entitypath/entity%28__%29.md): Provides a child entity’s path.

### Accessing root motion

- [rootMotion](entitypath/rootmotion.md): The root motion bind target for this entity.

### Instance Properties

- [billboardBlendFactor](entitypath/billboardblendfactor.md)
- [opacity](entitypath/opacity.md): A bind target for the entity’s opacity.. Requires that the entity has an OpacityComponent

### Instance Methods

- [blendShapeWeights()](entitypath/blendshapeweights%28%29.md): A bind target for the entity’s blend shape weights.
- [blendShapeWeightsAtIndex(\_:)](entitypath/blendshapeweightsatindex%28__%29.md)
- [blendShapeWeightsWithID(\_:)](entitypath/blendshapeweightswithid%28__%29.md)
- [ikSolver(\_:)](entitypath/iksolver%28__%29.md)
- [material(\_:)](entitypath/material%28__%29.md): Provides a specified material’s path.
- [skeletalPose(\_:)](entitypath/skeletalpose%28__%29.md)

## See Also

### Targeting entities and scenes

- [scene(\_:)](scene%28__%29.md): Generates a bind path from a particular scene.
- [BindTarget.ScenePath](scenepath.md): A bind path for a particular scene.
- [anchorEntity(\_:)](anchorentity%28__%29.md): Generates a complex bind path from a particular anchor entity in the scene.
- [entity(\_:)](entity%28__%29.md): Generates a complex bind path from a particular child entity of the current entity.
