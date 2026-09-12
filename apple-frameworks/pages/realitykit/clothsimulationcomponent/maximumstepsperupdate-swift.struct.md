> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.struct](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.struct)

# ClothSimulationComponent.MaximumStepsPerUpdate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The maximum number of time steps that can be processed per simulation update.

## Declaration

```swift
struct MaximumStepsPerUpdate
```

## Topics

### Creating a step limit

- [fixed(steps:)](maximumstepsperupdate-swift.struct/fixed%28steps_%29.md): A fixed maximum number of steps per update is manually configured.

### Describing the value

- [debugDescription](maximumstepsperupdate-swift.struct/debugdescription.md): A textual representation of this instance, suitable for debugging.

### Type Properties

- [automatic](maximumstepsperupdate-swift.struct/automatic.md): A dynamic maximum number of steps per update is automatically configured throughout runtime based on target platform.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling simulation timing

- [timeStep](timestep.md): The amount of time the simulation advances each time step, in seconds.
- [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md): The maximum number of time steps that the simulation can advance each update.
- [speedLimit](speedlimit-swift.property.md): The speed limit configuration of the simulation.
- [ClothSimulationComponent.SpeedLimit](speedlimit-swift.struct.md): Whether the speed of cloth bodies should be limited to improve self-collision robustness.
- [meshCollidersUpdateInterval](meshcollidersupdateinterval.md): The number of time steps between updates to the mesh colliders in the simulation.
