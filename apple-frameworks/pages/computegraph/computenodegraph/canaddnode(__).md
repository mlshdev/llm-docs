> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/canaddnode(_:)](https://developer.apple.com/documentation/computegraph/computenodegraph/canaddnode(_:))

# canAddNode(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns whether the given node can be added to the graph.

## Declaration

```swift
func canAddNode(_ node: ComputeNodeGraph.Node) -> Bool
```

## Parameters

- `node`: The node to test.

<a id="return-value"></a>

## Return Value

`true` if calling [addNode(\_:)](addnode%28__%29.md) with this node would succeed.

<a id="discussion"></a>

## Discussion

This is the non-throwing preflight check for [addNode(\_:)](addnode%28__%29.md). Use it to validate a node — for example, to gate UI affordances — without modifying the graph.
