> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/simulationrate](https://developer.apple.com/documentation/realitykit/computegraphcomponent/simulationrate)

# simulationRate

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The rate at which the simulation updates.

## Declaration

```swift
var simulationRate: ComputeGraphSimulation.SimulationRate { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `SimulationRate/default` if no custom rate has been set.
