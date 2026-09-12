> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/addnode(_:)](https://developer.apple.com/documentation/computegraph/computenodegraph/addnode(_:))

# addNode(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Adds a node to the graph.

## Declaration

```swift
mutating func addNode(_ node: ComputeNodeGraph.Node) throws -> ComputeNodeGraph.NodeID
```

## Parameters

- `node`: The node to add.

<a id="return-value"></a>

## Return Value

The key assigned to the newly added node.

<a id="discussion"></a>

## Discussion

> **Throws**

> A `NodeError` if the node cannot be added.
