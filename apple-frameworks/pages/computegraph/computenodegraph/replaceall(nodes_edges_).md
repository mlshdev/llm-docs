> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/replaceall(nodes:edges:)](https://developer.apple.com/documentation/computegraph/computenodegraph/replaceall(nodes:edges:))

# replaceAll(nodes:edges:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Replaces all nodes and edges in the graph with the provided collections.

## Declaration

```swift
mutating func replaceAll(nodes: [ComputeNodeGraph.NodeID : ComputeNodeGraph.Node], edges: [ComputeNodeGraph.Edge]) throws
```

## Parameters

- `nodes`: A sequence of nodes and their keys to add to the graph.
- `edges`: A sequence of edges to add to the graph.

<a id="discussion"></a>

## Discussion

This bulk operation allows for efficient wholesale replacement of the graph’s structure.

> **Throws**

> An error if the replacement operation fails.
