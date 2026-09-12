> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perclothvertexdata](https://developer.apple.com/documentation/realitykit/perclothvertexdata)

# PerClothVertexData

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A generic type that stores per-vertex data in a buffer.

## Declaration

```swift
struct PerClothVertexData<ElementType>
```

## Topics

### Accessing vertex data

- [vertexCount](perclothvertexdata/vertexcount.md): The number of vertices this structure holds data for.
- [withElements(\_:)](perclothvertexdata/withelements%28__%29.md): Provides read-only access to the per-vertex data within a callback.
- [withMutableElements(\_:)](perclothvertexdata/withmutableelements%28__%29.md): Provides mutable access to the per-vertex data within a callback.

### Setting vertex values

- [set(vertexIndices:value:)](perclothvertexdata/set%28vertexindices_value_%29.md): Sets the data for the given vertex indices to a common value.
- [setAll(value:)](perclothvertexdata/setall%28value_%29.md): Sets the data for all vertices to a common value.
- [reset()](perclothvertexdata/reset%28%29-1nlsc.md): Conforms when `ElementType` is `ClothBodyComponent.TargetShape.PositionConstraint`. Resets the per-vertex data of each vertex to the default position constraint.
- [reset()](perclothvertexdata/reset%28%29-403m8.md): Conforms when `ElementType` is `ClothBodyComponent.ExternalForce`. Resets the per-vertex data of each vertex to a zero-force external force.
- [reset()](perclothvertexdata/reset%28%29-4x5xi.md): Conforms when `ElementType` is `ClothBodyComponent.ParticleMotionType`. Resets the per-vertex data of each vertex to the default motion type.

### Instance Methods

- [reset()](perclothvertexdata/reset%28%29.md): Conforms when `ElementType` is `ClothBodyComponent.TargetShape.PositionConstraint`. Resets the per-vertex data of each vertex to the default position constraint.

## See Also

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothBodyMaterial](clothbodymaterial.md): A struct that represents a cloth body’s material.
- [ClothGrabComponent](clothgrabcomponent.md): A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.
- [ClothForceVolumeComponent](clothforcevolumecomponent.md): A component that creates a force volume applying forces to any intersecting cloth body particles.
- [ClothQueryVolumeComponent](clothqueryvolumecomponent.md): A component that defines a volume for querying particles of cloth bodies.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
