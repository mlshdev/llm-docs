> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/meshcollidersupdateinterval](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/meshcollidersupdateinterval)

# meshCollidersUpdateInterval

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The number of time steps between updates to the mesh colliders in the simulation.

## Declaration

```swift
var meshCollidersUpdateInterval: Int { get set }
```

<a id="discussion"></a>

## Discussion

In this context, a mesh collider update is referring to when the collider applies and detects collisions. A higher interval results in worse collision detection but better performance and power.

The mesh colliders are guaranteed to update on the last time step of each update. This ensures that all collisions have been applied right before the next frame is rendered. As example, the mesh colliders will update on the following steps if the interval is `2` and the update is advancing `8` time steps.

```
Step 1: Mesh colliders update.
Step 2:
Step 3:
Step 4: Mesh colliders update.
Step 5:
Step 6:
Step 7: Mesh colliders update.
Step 8: Mesh colliders update (guaranteed on last step).
```

Must be non-negative; negative values are clamped to zero. If zero, the mesh colliders will update every time step.

## See Also

### Controlling simulation timing

- [timeStep](timestep.md): The amount of time the simulation advances each time step, in seconds.
- [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md): The maximum number of time steps that the simulation can advance each update.
- [ClothSimulationComponent.MaximumStepsPerUpdate](maximumstepsperupdate-swift.struct.md): The maximum number of time steps that can be processed per simulation update.
- [speedLimit](speedlimit-swift.property.md): The speed limit configuration of the simulation.
- [ClothSimulationComponent.SpeedLimit](speedlimit-swift.struct.md): Whether the speed of cloth bodies should be limited to improve self-collision robustness.
