> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssimulationevents/willsimulate/simulationrootentity](https://developer.apple.com/documentation/realitykit/physicssimulationevents/willsimulate/simulationrootentity)

# simulationRootEntity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The root simulation entity associated with the simulation that raised the event.

## Declaration

```swift
let simulationRootEntity: Entity?
```

<a id="discussion"></a>

## Discussion

This entity is `nil` if the physics simulation is the default global one that covers all entities in the hierarchy. Use [PhysicsSimulationComponent](../../physicssimulationcomponent.md) to construct a custom physics simulation for a subtree of entities that you have access to.  The event from this custom simulation reports a non-`nil` root simulation entity.
