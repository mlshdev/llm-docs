> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/canaddedge(_:)](https://developer.apple.com/documentation/computegraph/computenodegraph/canaddedge(_:))

# canAddEdge(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns whether the given edge can be added to the graph.

## Declaration

```swift
func canAddEdge(_ edge: ComputeNodeGraph.Edge) -> Bool
```

## Parameters

- `edge`: The edge to test.

<a id="return-value"></a>

## Return Value

`true` if calling [addEdge(\_:)](addedge%28__%29.md) with this edge would succeed.

<a id="discussion"></a>

## Discussion

This is the non-throwing preflight check for [addEdge(\_:)](addedge%28__%29.md). Use it to validate a connection — for example, to highlight compatible ports during drag-and-drop — without modifying the graph.
