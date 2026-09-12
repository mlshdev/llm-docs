> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/speedlimit-swift.property](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/speedlimit-swift.property)

# speedLimit

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The speed limit configuration of the simulation.

## Declaration

```swift
var speedLimit: ClothSimulationComponent.SpeedLimit
```

## See Also

### Controlling simulation timing

- [timeStep](timestep.md): The amount of time the simulation advances each time step, in seconds.
- [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md): The maximum number of time steps that the simulation can advance each update.
- [ClothSimulationComponent.MaximumStepsPerUpdate](maximumstepsperupdate-swift.struct.md): The maximum number of time steps that can be processed per simulation update.
- [ClothSimulationComponent.SpeedLimit](speedlimit-swift.struct.md): Whether the speed of cloth bodies should be limited to improve self-collision robustness.
- [meshCollidersUpdateInterval](meshcollidersupdateinterval.md): The number of time steps between updates to the mesh colliders in the simulation.
