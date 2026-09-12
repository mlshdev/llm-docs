> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweightsdata](https://developer.apple.com/documentation/realitykit/blendshapeweightsdata)

# BlendShapeWeightsData

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A structure that encapsulates the blend shape name, blend shape weights and the names of those weights to be stored by the blend shape weights set.

## Declaration

```swift
struct BlendShapeWeightsData
```

## Topics

### Initializers

- [init(id:weights:)](blendshapeweightsdata/init%28id_weights_%29.md): Creates an instance of the named weights for a single blend shape.

### Instance Properties

- [id](blendshapeweightsdata/id.md): The unique id of the blend shape. This value is used when binding to the structure using an animation bind target.
- [weightNames](blendshapeweightsdata/weightnames.md): The name of each weight value defined in the [weights](blendshapeweightsdata/weights.md) variable.
- [weights](blendshapeweightsdata/weights.md): The blend shape’s weight values.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Blend shape management

- [BlendShapeWeightsComponent](blendshapeweightscomponent.md): A component that provides access to the current weights associated with all blend shape meshes on an entity.
- [BlendShapeWeightsMapping](blendshapeweightsmapping.md): A mapping of blend weights to the target meshes that those weights affect.
- [BlendShapeWeights](blendshapeweights.md): A set of animatable weight values that collectively represent the blending amounts for all the blend shapes’ blend targets.
- [BlendShapeWeightsSet](blendshapeweightsset.md): A custom collection of named blend shape weights.
