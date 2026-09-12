> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformeroptions/cadence-swift.enum/ondemand](https://developer.apple.com/documentation/realitykit/meshdeformeroptions/cadence-swift.enum/ondemand)

# MeshDeformerOptions.Cadence.onDemand

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Applies the custom deformer function only when you request it. You can explicitly request the deformer function to be called by setting new input. Like all other deformers, the deformer updates again if a previous deformer in the `MeshDeformationStack` updates.

## Declaration

```swift
case onDemand
```

## See Also

### Choosing an update cadence

- [MeshDeformerOptions.Cadence.everyFrame](everyframe.md): Applies the custom deformer function automatically, every frame.
