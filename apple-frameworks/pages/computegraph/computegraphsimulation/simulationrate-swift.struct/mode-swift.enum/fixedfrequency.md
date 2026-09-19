> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/simulationrate-swift.struct/mode-swift.enum/fixedfrequency

# ComputeGraphSimulation.SimulationRate.Mode.fixedFrequency

**Framework:** Compute Graph  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Simulate using a fixed number of steps per second.

## Declaration

```swift
case fixedFrequency
```

<a id="discussion"></a>

## Discussion

This can result in zero, one, or more steps per frame, depending on the frequency specified and the current framerate.
