> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/init(mesh:meshdraping:)](https://developer.apple.com/documentation/realitykit/clothbodycomponent/init(mesh:meshdraping:))

# init(mesh:meshDraping:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a new cloth body component.

## Declaration

```swift
init(mesh: ClothMeshResource, meshDraping: ClothPoseResource? = nil)
```

## Parameters

- `mesh`: The (simulation) mesh of the cloth body, which defines its at-rest shape.
- `meshDraping`: An optional initial pose for the body.

<a id="discussion"></a>

## Discussion

The body component must be attached to an entity that is a descendant of a simulation root (an entity with a [ClothSimulationComponent](../clothsimulationcomponent.md)) in order to be active.

## See Also

### Creating a cloth body

- [mesh](mesh.md): The (simulation) mesh of the cloth body that defines the rest pose of the body.
- [initialMeshDraping](initialmeshdraping.md): An optional pose that specifies an already draped configuration of the cloth at the start of the simulation.
