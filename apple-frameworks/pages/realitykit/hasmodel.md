> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasmodel](https://developer.apple.com/documentation/realitykit/hasmodel)

# HasModel

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that provides meshes and materials to define the visual appearance of an entity.

## Declaration

```swift
@MainActor @preconcurrency protocol HasModel : HasTransform
```

## Topics

### Retrieving a model

- [model](hasmodel/model.md): The model component for the entity.

### Managing joints

- [jointNames](hasmodel/jointnames.md): The names of all the joints in the model entity.
- [jointTransforms](hasmodel/jointtransforms.md): The relative joint transforms of the model entity.

### Instance Properties

- [blendWeightNames](hasmodel/blendweightnames.md): The names of the weights on each blend shape in the model entity.
- [blendWeights](hasmodel/blendweights.md): The blend shape weights in the model entity.
- [modelDebugOptions](hasmodel/modeldebugoptions.md): Configures the debug visualization of this model.

## Relationships

### Inherits From

- [HasTransform](hastransform.md)

### Conforming Types

- [BodyTrackedEntity](bodytrackedentity.md)
- [ModelEntity](modelentity.md)
