> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.property](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/maximumstepsperupdate-swift.property)

# maximumStepsPerUpdate

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The maximum number of time steps that the simulation can advance each update.

## Declaration

```swift
var maximumStepsPerUpdate: ClothSimulationComponent.MaximumStepsPerUpdate
```

<a id="discussion"></a>

## Discussion

A higher number of time steps per update is more expensive in terms of power and performance. However, a lower number restricts the simulation’s ability to keep up with the [targetClock](targetclock.md).

As an example, if [timeStep](timestep.md) is `1.4 ms` and [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md) is `13`, then the simulation can perfectly follow [targetClock](targetclock.md) up to delta times of `1.4 ms * 13 = 18.2 ms`.

The automatic value differs based on the target platform. Must be a positive number.

## See Also

### Controlling simulation timing

- [timeStep](timestep.md): The amount of time the simulation advances each time step, in seconds.
- [ClothSimulationComponent.MaximumStepsPerUpdate](maximumstepsperupdate-swift.struct.md): The maximum number of time steps that can be processed per simulation update.
- [speedLimit](speedlimit-swift.property.md): The speed limit configuration of the simulation.
- [ClothSimulationComponent.SpeedLimit](speedlimit-swift.struct.md): Whether the speed of cloth bodies should be limited to improve self-collision robustness.
- [meshCollidersUpdateInterval](meshcollidersupdateinterval.md): The number of time steps between updates to the mesh colliders in the simulation.
