> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweightsmapping](https://developer.apple.com/documentation/realitykit/blendshapeweightsmapping)

# BlendShapeWeightsMapping

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A mapping of blend weights to the target meshes that those weights affect.

## Declaration

```swift
class BlendShapeWeightsMapping
```

<a id="overview"></a>

## Overview

Use `BlendShapeWeightsMapping` to initialize a [BlendShapeWeightsComponent](blendshapeweightscomponent.md). You can initialize it in two different ways:

- Initialize the mapping from a user-provided [MeshResource](meshresource.md), from which the mapping information can be generated.  In this case, the number of blend shapes and each blend shape’s weights map exactly to the `MeshResource`’s structure.

```swift
if let modelComponent = blendShapeEntity.components[ModelComponent.self] {
    let meshResource = modelComponent.mesh
    let blendShapeWeightsMapping = BlendShapeWeightsMapping(
        meshResource: meshResource)
    blendShapeEntity.components.set(BlendShapeWeightsComponent(
        weightsMapping: blendShapeWeightsMapping))
}
```

- Initialize the mapping from a user-defined blend shape name and list of weight names.  When used to initialize a [BlendShapeWeightsComponent](blendshapeweightscomponent.md), the weight names define which mesh targets map from the owning entity’s [ModelComponent](modelcomponent.md)’s mesh resource.

  RealityKit expects the [ModelComponent](modelcomponent.md) to already be assigned to the entity on which the [BlendShapeWeightsComponent](blendshapeweightscomponent.md) resides.  Match the weight names to the weight names found in the [ModelComponent](modelcomponent.md)’s mesh resource. If a weight name does not match any of the mesh weight names then it is ignored and that weight will have no effect. If a weight name in the [ModelComponent](modelcomponent.md)’s mesh resource is excluded from the list of weight names, then the associated target mesh will not be controllable by any of the provided weights.

  Note also that the provided blend shape name can be used to reference the blend shape weights in the [BlendShapeWeightsSet](blendshapeweightsset.md).

```swift
let weightNames: [String] = [
    "weight0",
    "weight1"
]

let blendShapeWeightsMapping = BlendShapeWeightsMapping(
    blendShapeName: "BlendShape0",
    weightNames: weightNames)

blendShapeEntity.components.set(BlendShapeWeightsComponent(
    weightsMapping: blendShapeWeightsMapping))
```

## Topics

### Initializers

- [init(blendShapeName:weightNames:)](blendshapeweightsmapping/init%28blendshapename_weightnames_%29.md): Creates a mapping that applies the weight names to mesh parts in a model component.
- [init(meshResource:)](blendshapeweightsmapping/init%28meshresource_%29.md): Creates a mapping from the given MeshResource.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Blend shape management

- [BlendShapeWeightsComponent](blendshapeweightscomponent.md): A component that provides access to the current weights associated with all blend shape meshes on an entity.
- [BlendShapeWeights](blendshapeweights.md): A set of animatable weight values that collectively represent the blending amounts for all the blend shapes’ blend targets.
- [BlendShapeWeightsData](blendshapeweightsdata.md): A structure that encapsulates the blend shape name, blend shape weights and the names of those weights to be stored by the blend shape weights set.
- [BlendShapeWeightsSet](blendshapeweightsset.md): A custom collection of named blend shape weights.
