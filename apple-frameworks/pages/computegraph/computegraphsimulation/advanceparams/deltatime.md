> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/advanceparams/deltatime](https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/deltatime)

# deltaTime

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The time interval, in seconds, to advance the simulation.

## Declaration

```swift
var deltaTime: Float
```

<a id="discussion"></a>

## Discussion

When [mode](../simulationrate-swift.struct/mode-swift.property.md) is [ComputeGraphSimulation.SimulationRate.Mode.fixedFrequency](../simulationrate-swift.struct/mode-swift.enum/fixedfrequency.md) or [ComputeGraphSimulation.SimulationRate.Mode.fixedTime](../simulationrate-swift.struct/mode-swift.enum/fixedtime.md), the simulation takes between zero and [maxSteps](maxsteps.md) fixed-size steps to consume this interval. Any remaining time is accumulated and carried into the next advance.
