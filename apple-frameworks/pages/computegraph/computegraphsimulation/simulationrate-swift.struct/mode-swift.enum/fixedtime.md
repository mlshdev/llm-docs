> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/simulationrate-swift.struct/mode-swift.enum/fixedtime](https://developer.apple.com/documentation/computegraph/computegraphsimulation/simulationrate-swift.struct/mode-swift.enum/fixedtime)

# ComputeGraphSimulation.SimulationRate.Mode.fixedTime

**Framework:** Compute Graph  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Simulate using time delta.

## Declaration

```swift
case fixedTime
```

<a id="discussion"></a>

## Discussion

Similar to fixedFrequency except the timeDelta is in seconds.

This can result in zero, one, or more steps per frame, depending on the frequency specified and the current framerate.
