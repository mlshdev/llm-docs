> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/contains(node:)](https://developer.apple.com/documentation/computegraph/computenodegraph/contains(node:))

# contains(node:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns whether the graph contains a node with the given key.

## Declaration

```swift
func contains(node: ComputeNodeGraph.NodeID) -> Bool
```

## Parameters

- `node`: The key of the node to look up.

<a id="return-value"></a>

## Return Value

`true` if the graph contains the node; otherwise, `false`.
