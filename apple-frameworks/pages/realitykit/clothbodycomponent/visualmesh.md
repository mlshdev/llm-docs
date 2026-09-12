> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/visualmesh](https://developer.apple.com/documentation/realitykit/clothbodycomponent/visualmesh)

# visualMesh

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The dynamically deforming visual mesh of the cloth body, which you may read but not modify.

## Declaration

```swift
var visualMesh: LowLevelMesh? { get }
```

<a id="discussion"></a>

## Discussion

This visual mesh will always be nil at first. The visual mesh becomes non-nil if the entity is part of a simulation and has a [ModelComponent](../modelcomponent.md) whose mesh is not a [LowLevelMesh](../lowlevelmesh.md). This is a dynamically deforming version of the mesh stored in the [ModelComponent](../modelcomponent.md), and overrides the rendering.

The visual mesh is updated on the GPU after each simulation update. Subscribe to [ClothSimulationEvents.AfterUpdate](../clothsimulationevents/afterupdate.md) to know when new data is available. To read the mesh contents on the GPU, encode your work using the scene’s `commandQueue` to ensure proper synchronization with the simulation’s GPU writes.

## See Also

### Mapping the visual mesh

- [visualMeshWeights](visualmeshweights.md): Optional weights by which the visual mesh should be deformed according to the simulation mesh.
- [materialNames](materialnames.md): The names of the body materials used by this cloth body.
- [ClothBodyComponent.PerVisualVertexData](pervisualvertexdata.md): Stores per-vertex data for all visual vertices in a buffer.
- [ClothBodyComponent.PerSimulationVertexData](persimulationvertexdata.md): Stores per-vertex data for all simulation vertices in a buffer.
