> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/pipelines

# pipelines

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The compiled pipelines used to execute the simulation.

## Declaration

```swift
var pipelines: ComputeNodeGraph.Pipelines? { get set }
```

<a id="discussion"></a>

## Discussion

When `nil`, the pipelines from [resource](resource.md) are used. Assigning a value overrides the resource’s pipelines without replacing the loaded assets.
