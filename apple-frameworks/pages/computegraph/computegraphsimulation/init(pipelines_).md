> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/init(pipelines:)

# init(pipelines:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Initialize a ComputeGraphSimulation for the given pipelines, or a default pipeline if not specified.

## Declaration

```swift
convenience init(pipelines: ComputeNodeGraph.Pipelines?)
```

<a id="discussion"></a>

## Discussion

The simulation will use the ComputeGraphFramework’s default queue for operations such as [fastForward()](fastforward%28%29.md) and resetting after setting the pipeline.

Prefer `init(pipeline:commandQueue:)` to this method.
