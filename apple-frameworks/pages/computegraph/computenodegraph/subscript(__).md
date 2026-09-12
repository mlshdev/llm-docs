> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/subscript(_:)](https://developer.apple.com/documentation/computegraph/computenodegraph/subscript(_:))

# subscript(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Accesses the node associated with the given key.

## Declaration

```swift
subscript(node: ComputeNodeGraph.NodeID) -> ComputeNodeGraph.Node? { get }
```

## Parameters

- `node`: The key identifying the node to retrieve.

<a id="return-value"></a>

## Return Value

The node if it exists, or `nil` if no node is associated with the key.
