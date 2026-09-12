> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/simulationstate](https://developer.apple.com/documentation/realitykit/computegraphcomponent/simulationstate)

# ComputeGraphComponent.SimulationState

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The playback state of a compute graph simulation.

## Declaration

```swift
enum SimulationState
```

## Topics

### Enumeration Cases

- [ComputeGraphComponent.SimulationState.paused](simulationstate/paused.md): The simulation is frozen; no steps are evaluated.
- [ComputeGraphComponent.SimulationState.playing](simulationstate/playing.md): The simulation advances each frame at its configured rate.
- [ComputeGraphComponent.SimulationState.stepping](simulationstate/stepping.md): The simulation evaluates exactly one step on the next frame, then returns to [ComputeGraphComponent.SimulationState.paused](simulationstate/paused.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
