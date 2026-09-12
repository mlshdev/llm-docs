> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/visualmeshweights](https://developer.apple.com/documentation/realitykit/clothbodycomponent/visualmeshweights)

# visualMeshWeights

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Optional weights by which the visual mesh should be deformed according to the simulation mesh.

## Declaration

```swift
var visualMeshWeights: PerClothVertexData<Float>?
```

<a id="discussion"></a>

## Discussion

A weight of 1 indicates that the simulation will fully control the corresponding visual vertex, whereas a weight of 0 indicates that the simulation will not affect the visual vertex at all.

## See Also

### Mapping the visual mesh

- [visualMesh](visualmesh.md): The dynamically deforming visual mesh of the cloth body, which you may read but not modify.
- [materialNames](materialnames.md): The names of the body materials used by this cloth body.
- [ClothBodyComponent.PerVisualVertexData](pervisualvertexdata.md): Stores per-vertex data for all visual vertices in a buffer.
- [ClothBodyComponent.PerSimulationVertexData](persimulationvertexdata.md): Stores per-vertex data for all simulation vertices in a buffer.
