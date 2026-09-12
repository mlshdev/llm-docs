> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/init(pipelines:commandqueue:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/init(pipelines:commandqueue:))

# init(pipelines:commandQueue:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Initialize a ComputeGraphSimulation for the given pipelines

## Declaration

```swift
convenience init(pipelines: ComputeNodeGraph.Pipelines, commandQueue: any MTLCommandQueue)
```

<a id="discussion"></a>

## Discussion

The simulation will use the provided command queue for operations such as [fastForward()](fastforward%28%29.md) and resetting the system.
