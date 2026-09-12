> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/initialmeshdraping](https://developer.apple.com/documentation/realitykit/clothbodycomponent/initialmeshdraping)

# initialMeshDraping

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An optional pose that specifies an already draped configuration of the cloth at the start of the simulation.

## Declaration

```swift
var initialMeshDraping: ClothPoseResource? { get }
```

<a id="discussion"></a>

## Discussion

This configuration is applied when the body is created or reset, providing the cloth with an initial settled state. In contrast, the rest pose defined by [mesh](mesh.md) represents the reference shape that the cloth attempts to preserve during deformation.

The number and ordering of positions in this pose resource must match those of the [mesh](mesh.md).

## See Also

### Creating a cloth body

- [init(mesh:meshDraping:)](init%28mesh_meshdraping_%29.md): Creates a new cloth body component.
- [mesh](mesh.md): The (simulation) mesh of the cloth body that defines the rest pose of the body.
