> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothgrabcomponent](https://developer.apple.com/documentation/realitykit/clothgrabcomponent)

# ClothGrabComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.

## Declaration

```swift
struct ClothGrabComponent
```

<a id="overview"></a>

## Overview

When `isGrabbing` is first set to true, a selection is made using the ray/volume. While `isGrabbing` remains true, the selected particles will be dragged to the position determined by the ray/volume. When `isGrabbing` is set to false, any selected particles are released and will once again be controlled by the simulation.

To smoothen the motion of particles dragged using a volume, `falloff` can be set to `.enabled`. This causes the strength of the particle dragging to fall off based on the distance from the volume surface.

## Topics

### Creating a grab component

- [init(mode:)](clothgrabcomponent/init%28mode_%29.md): Creates a cloth grab component with the given grab mode.
- [ClothGrabComponent.GrabMode](clothgrabcomponent/grabmode.md): Defines whether a grab component will select particles using a ray or a volume.

### Configuring the falloff

- [falloff](clothgrabcomponent/falloff-swift.property.md): Controls whether the grabbing strength falls off based on distance from the volume surface.
- [ClothGrabComponent.Falloff](clothgrabcomponent/falloff-swift.struct.md): Controls whether grab strength falls off based on particle distance from the volume surface.

### Checking the grab state

- [isGrabbing](clothgrabcomponent/isgrabbing.md): Indicates whether particles are currently being grabbed.

### Instance Properties

- [mode](clothgrabcomponent/mode.md): Mode that determines whether grabbing will be performed using a ray or a volume.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothBodyMaterial](clothbodymaterial.md): A struct that represents a cloth body’s material.
- [ClothForceVolumeComponent](clothforcevolumecomponent.md): A component that creates a force volume applying forces to any intersecting cloth body particles.
- [ClothQueryVolumeComponent](clothqueryvolumecomponent.md): A component that defines a volume for querying particles of cloth bodies.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
- [PerClothVertexData](perclothvertexdata.md): A generic type that stores per-vertex data in a buffer.
