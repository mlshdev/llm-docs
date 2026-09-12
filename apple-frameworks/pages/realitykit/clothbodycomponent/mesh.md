> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/mesh](https://developer.apple.com/documentation/realitykit/clothbodycomponent/mesh)

# mesh

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The (simulation) mesh of the cloth body that defines the rest pose of the body.

## Declaration

```swift
var mesh: ClothMeshResource { get }
```

<a id="discussion"></a>

## Discussion

This acts as the initial pose of the body when [initialMeshDraping](initialmeshdraping.md) is `nil`.

The different stiffnesses of the assigned material determine in which ways and how firmly the body tries to preserve this rest pose. You can use [resetDeformation(entity:)](resetdeformation%28entity_%29.md) to restore the body back to this rest pose at any time.

The topology of the mesh can influence the simulation behavior.

## See Also

### Creating a cloth body

- [init(mesh:meshDraping:)](init%28mesh_meshdraping_%29.md): Creates a new cloth body component.
- [initialMeshDraping](initialmeshdraping.md): An optional pose that specifies an already draped configuration of the cloth at the start of the simulation.
