> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/models](https://developer.apple.com/documentation/realitykit/computegraphcomponent/models)

# models

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Per-output model component overrides, keyed by output node identifier.

## Declaration

```swift
var models: [ComputeNodeGraph.NodeID : ModelComponent] { get set }
```

<a id="discussion"></a>

## Discussion

When non-`nil`, these model components replace those defined in [resource](resource.md). Set to `[:]` to restore resource-defined models.
