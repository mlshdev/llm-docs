> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computenodegraph/removenode(_:)

# removeNode(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Removes a node from the graph.

## Declaration

```swift
mutating func removeNode(_ node: ComputeNodeGraph.NodeID) throws
```

## Parameters

- `node`: The key of the node to remove.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the node cannot be removed.
