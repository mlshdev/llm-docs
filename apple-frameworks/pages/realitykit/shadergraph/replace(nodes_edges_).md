> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/replace(nodes:edges:)](https://developer.apple.com/documentation/realitykit/shadergraph/replace(nodes:edges:))

# replace(nodes:edges:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces all nodes and edges in the graph.

## Declaration

```swift
final func replace(nodes: [String : ShaderGraph.Node], edges: [ShaderGraph.Edge]) throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> If the provided nodes and edges do not form a valid graph.
