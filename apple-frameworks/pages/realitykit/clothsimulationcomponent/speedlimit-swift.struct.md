> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/speedlimit-swift.struct](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/speedlimit-swift.struct)

# ClothSimulationComponent.SpeedLimit

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Whether the speed of cloth bodies should be limited to improve self-collision robustness.

## Declaration

```swift
struct SpeedLimit
```

<a id="overview"></a>

## Overview

When enabled, the simulation limits particle displacement per time step to reduce the likelihood of particles tunneling through each other during self-collisions.

## Topics

### Accessing speed limits

- [unlimited](speedlimit-swift.struct/unlimited.md): No speed limit, cloth bodies can move at arbitrarily fast speeds.

### Type Properties

- [automatic](speedlimit-swift.struct/automatic.md): Automatically configured speed limit, which limits particle displacement per time step to reduce self-collision tunneling. The limit is proportionate to the particle density of the simulation; a higher density produces a more aggressive speed cap.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling simulation timing

- [timeStep](timestep.md): The amount of time the simulation advances each time step, in seconds.
- [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md): The maximum number of time steps that the simulation can advance each update.
- [ClothSimulationComponent.MaximumStepsPerUpdate](maximumstepsperupdate-swift.struct.md): The maximum number of time steps that can be processed per simulation update.
- [speedLimit](speedlimit-swift.property.md): The speed limit configuration of the simulation.
- [meshCollidersUpdateInterval](meshcollidersupdateinterval.md): The number of time steps between updates to the mesh colliders in the simulation.
