> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformeroptions/cadence-swift.enum](https://developer.apple.com/documentation/realitykit/meshdeformeroptions/cadence-swift.enum)

# MeshDeformerOptions.Cadence

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies when RealityKit applies the custom deformer functions.

## Declaration

```swift
enum Cadence
```

## Topics

### Choosing an update cadence

- [MeshDeformerOptions.Cadence.everyFrame](cadence-swift.enum/everyframe.md): Applies the custom deformer function automatically, every frame.
- [MeshDeformerOptions.Cadence.onDemand](cadence-swift.enum/ondemand.md): Applies the custom deformer function only when you request it. You can explicitly request the deformer function to be called by setting new input. Like all other deformers, the deformer updates again if a previous deformer in the `MeshDeformationStack` updates.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the cadence

- [cadence](cadence-swift.property.md): Determines the update frequence for the defomer type.
