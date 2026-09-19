> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computenodegraph/contains(edge:)

# contains(edge:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns whether the graph contains the given edge.

## Declaration

```swift
func contains(edge: ComputeNodeGraph.Edge) -> Bool
```

## Parameters

- `edge`: The edge to look up.

<a id="return-value"></a>

## Return Value

`true` if the graph contains the edge; otherwise, `false`.
