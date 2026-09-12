> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/updatenode(_:forkey:)](https://developer.apple.com/documentation/computegraph/computenodegraph/updatenode(_:forkey:))

# updateNode(\_:forKey:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Updates an existing node in the graph.

## Declaration

```swift
mutating func updateNode(_ node: ComputeNodeGraph.Node, forKey nodeID: ComputeNodeGraph.NodeID) throws
```

## Parameters

- `node`: The updated node data.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the node cannot be updated.
