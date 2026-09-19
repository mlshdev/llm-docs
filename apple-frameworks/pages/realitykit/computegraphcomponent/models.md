> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/models

# models

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The model component used to render each graph output, keyed by output node identifier.

## Declaration

```swift
var models: [ComputeNodeGraph.NodeID : ModelComponent] { get set }
```

<a id="discussion"></a>

## Discussion

Assigning a [resource](resource.md) initializes this dictionary from the models the resource defines for its outputs. Assign a new value to replace them.
