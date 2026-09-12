> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/materialnames](https://developer.apple.com/documentation/realitykit/clothbodycomponent/materialnames)

# materialNames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The names of the body materials used by this cloth body.

## Declaration

```swift
var materialNames: [String]
```

<a id="discussion"></a>

## Discussion

The default material is used if no matching material name is present in [ClothSimulationComponent](../clothsimulationcomponent.md).

The material of the cloth body determines different properties about the physical behavior of the body, like its resistance to being stretched or the friction it experiences when colliding.

Note, only the first material name is used.

## See Also

### Mapping the visual mesh

- [visualMesh](visualmesh.md): The dynamically deforming visual mesh of the cloth body, which you may read but not modify.
- [visualMeshWeights](visualmeshweights.md): Optional weights by which the visual mesh should be deformed according to the simulation mesh.
- [ClothBodyComponent.PerVisualVertexData](pervisualvertexdata.md): Stores per-vertex data for all visual vertices in a buffer.
- [ClothBodyComponent.PerSimulationVertexData](persimulationvertexdata.md): Stores per-vertex data for all simulation vertices in a buffer.
