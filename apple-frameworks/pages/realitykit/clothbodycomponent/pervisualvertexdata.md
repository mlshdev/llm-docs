> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/pervisualvertexdata](https://developer.apple.com/documentation/realitykit/clothbodycomponent/pervisualvertexdata)

# ClothBodyComponent.PerVisualVertexData

**Framework:** RealityKit  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Stores per-vertex data for all visual vertices in a buffer.

## Declaration

```swift
typealias PerVisualVertexData = PerClothVertexData
```

## See Also

### Mapping the visual mesh

- [visualMesh](visualmesh.md): The dynamically deforming visual mesh of the cloth body, which you may read but not modify.
- [visualMeshWeights](visualmeshweights.md): Optional weights by which the visual mesh should be deformed according to the simulation mesh.
- [materialNames](materialnames.md): The names of the body materials used by this cloth body.
- [ClothBodyComponent.PerSimulationVertexData](persimulationvertexdata.md): Stores per-vertex data for all simulation vertices in a buffer.
