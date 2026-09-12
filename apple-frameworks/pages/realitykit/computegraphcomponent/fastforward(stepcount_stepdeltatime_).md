> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/fastforward(stepcount:stepdeltatime:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/fastforward(stepcount:stepdeltatime:))

# fastForward(stepCount:stepDeltaTime:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Advances the particle simulation by multiple steps in a single operation.

## Declaration

```swift
mutating func fastForward(stepCount: Int, stepDeltaTime: Float)
```

## Parameters

- `stepCount`: The number of simulation steps to execute. Each step represents one iteration of the simulation update cycle. Must be positive.
- `stepDeltaTime`: The time interval (in seconds) to use for each simulation step.

<a id="discussion"></a>

## Discussion

> **Note**

> The simulation will be advanced by a total time of `stepCount * stepDeltaTime` seconds.
