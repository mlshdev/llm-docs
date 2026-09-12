> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumecomponent](https://developer.apple.com/documentation/realitykit/clothqueryvolumecomponent)

# ClothQueryVolumeComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A component that defines a volume for querying particles of cloth bodies.

## Declaration

```swift
struct ClothQueryVolumeComponent
```

## Topics

### Creating a query volume

- [init(shape:)](clothqueryvolumecomponent/init%28shape_%29.md): Creates a cloth query volume component with the given shape.

### Configuring the volume shape

- [shape](clothqueryvolumecomponent/shape.md): The shape of the volume.

### Accessing query results

- [queryEntities](clothqueryvolumecomponent/queryentities.md): The entities to query for intersections with the volume.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothBodyMaterial](clothbodymaterial.md): A struct that represents a cloth body’s material.
- [ClothGrabComponent](clothgrabcomponent.md): A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.
- [ClothForceVolumeComponent](clothforcevolumecomponent.md): A component that creates a force volume applying forces to any intersecting cloth body particles.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
- [PerClothVertexData](perclothvertexdata.md): A generic type that stores per-vertex data in a buffer.
