> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodymaterial](https://developer.apple.com/documentation/realitykit/clothbodymaterial)

# ClothBodyMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A struct that represents a cloth body’s material.

## Declaration

```swift
struct ClothBodyMaterial
```

## Topics

### Configuring stiffness and damping

- [springStiffness](clothbodymaterial/springstiffness.md): The resistance to compressing and stretching between adjacent particles.
- [bendStiffness](clothbodymaterial/bendstiffness.md): The resistance to bending between adjacent triangles.
- [crossTetherStiffness](clothbodymaterial/crosstetherstiffness.md): The resistance to shearing between opposing vertices.
- [laplacianDamping](clothbodymaterial/laplaciandamping.md): Damping applied to the velocities of the particles, based on the velocities of their connecting particles.

### Configuring friction

- [staticFriction](clothbodymaterial/staticfriction.md): The friction a cloth body particle experiences when in contact with another particle or collider with no relative motion.
- [kineticFriction](clothbodymaterial/kineticfriction.md): The friction a cloth body particle experiences when in contact with another particle or collider with relative motion.

### Initializers

- [init()](clothbodymaterial/init%28%29.md): Creates a new material for cloth bodies.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothGrabComponent](clothgrabcomponent.md): A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.
- [ClothForceVolumeComponent](clothforcevolumecomponent.md): A component that creates a force volume applying forces to any intersecting cloth body particles.
- [ClothQueryVolumeComponent](clothqueryvolumecomponent.md): A component that defines a volume for querying particles of cloth bodies.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
- [PerClothVertexData](perclothvertexdata.md): A generic type that stores per-vertex data in a buffer.
