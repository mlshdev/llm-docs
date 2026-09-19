> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/advanceparams/maxsteps

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
