> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/timestep](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/timestep)

# timeStep

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The amount of time the simulation advances each time step, in seconds.

## Declaration

```swift
var timeStep: Float { get set }
```

<a id="discussion"></a>

## Discussion

A smaller number means more time steps are computed each frame, leading to higher simulation accuracy but also higher computation load.

Must be positive.

## See Also

### Controlling simulation timing

- [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md): The maximum number of time steps that the simulation can advance each update.
- [ClothSimulationComponent.MaximumStepsPerUpdate](maximumstepsperupdate-swift.struct.md): The maximum number of time steps that can be processed per simulation update.
- [speedLimit](speedlimit-swift.property.md): The speed limit configuration of the simulation.
- [ClothSimulationComponent.SpeedLimit](speedlimit-swift.struct.md): Whether the speed of cloth bodies should be limited to improve self-collision robustness.
- [meshCollidersUpdateInterval](meshcollidersupdateinterval.md): The number of time steps between updates to the mesh colliders in the simulation.
