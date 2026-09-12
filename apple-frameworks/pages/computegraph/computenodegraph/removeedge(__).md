> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/removeedge(_:)](https://developer.apple.com/documentation/computegraph/computenodegraph/removeedge(_:))

# removeEdge(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Removes an edge from the graph.

## Declaration

```swift
@discardableResult mutating func removeEdge(_ edge: ComputeNodeGraph.Edge) -> Bool
```

## Parameters

- `edge`: The edge to remove.

<a id="return-value"></a>

## Return Value

`true` if the edge was found and removed.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the edge cannot be removed.
