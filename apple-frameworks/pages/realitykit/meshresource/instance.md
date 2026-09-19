> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/instance

# MeshResource.Instance

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that transforms a model to a location.

## Declaration

```swift
struct Instance
```

## Topics

### Initializers

- [init(id:model:at:)](instance/init%28id_model_at_%29.md)

### Instance Properties

- [model](instance/model.md): Name of the model to instance.
- [transform](instance/transform.md): Transform for the instance.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Mesh resource data

- [MeshResource.Contents](contents-swift.struct.md): Value of the contents of the resource.
- [MeshResource.Model](model.md): A model consists of a list of parts.
- [MeshResource.Part](part.md): A part of a model consisting of a single material.
