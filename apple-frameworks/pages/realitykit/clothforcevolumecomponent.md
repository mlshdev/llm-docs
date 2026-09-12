> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothforcevolumecomponent](https://developer.apple.com/documentation/realitykit/clothforcevolumecomponent)

# ClothForceVolumeComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A component that creates a force volume applying forces to any intersecting cloth body particles.

## Declaration

```swift
struct ClothForceVolumeComponent
```

## Topics

### Creating a force volume

- [init(shape:)](clothforcevolumecomponent/init%28shape_%29.md): Creates a cloth force volume component with the given shape.

### Applying forces

- [windForce](clothforcevolumecomponent/windforce.md): The wind force applied to particles inside the volume.
- [constantForce](clothforcevolumecomponent/constantforce.md): The constant force applied to particles inside the volume.

### Shaping the volume

- [shape](clothforcevolumecomponent/shape.md): The shape of the volume.
- [falloffStart](clothforcevolumecomponent/falloffstart.md): The depth (in meters) inside the volume at which the total force starts to linearly fall off.

### Adding force noise

- [noiseAmplitude](clothforcevolumecomponent/noiseamplitude.md): The amplitude of the noise applied to particles inside the volume.
- [noiseFrequency](clothforcevolumecomponent/noisefrequency.md): The frequency of the noise applied to particles inside the volume.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothBodyMaterial](clothbodymaterial.md): A struct that represents a cloth body’s material.
- [ClothGrabComponent](clothgrabcomponent.md): A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.
- [ClothQueryVolumeComponent](clothqueryvolumecomponent.md): A component that defines a volume for querying particles of cloth bodies.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
- [PerClothVertexData](perclothvertexdata.md): A generic type that stores per-vertex data in a buffer.
