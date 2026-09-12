> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/advanceparams/maxsteps](https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/maxsteps)

# maxSteps

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The maximum number of fixed-size steps per advance.

## Declaration

```swift
var maxSteps: Int
```

<a id="discussion"></a>

## Discussion

This value is only used when [mode](../simulationrate-swift.struct/mode-swift.property.md) is [ComputeGraphSimulation.SimulationRate.Mode.fixedFrequency](../simulationrate-swift.struct/mode-swift.enum/fixedfrequency.md) or [ComputeGraphSimulation.SimulationRate.Mode.fixedTime](../simulationrate-swift.struct/mode-swift.enum/fixedtime.md).
