> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/data(using:)](https://developer.apple.com/documentation/computegraph/computenodegraph/data(using:))

# data(using:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns the graph encoded in the specified format.

## Declaration

```swift
func data(using format: ComputeNodeGraph.Format) throws -> Data
```

## Parameters

- `format`: The serialization format to use when encoding the graph.

<a id="return-value"></a>

## Return Value

The graph encoded using the specified format.

<a id="discussion"></a>

## Discussion

To reconstruct the graph, pass the data to [init(data:)](init%28data_%29.md).

> **Throws**

> An error if the graph can’t be encoded in the requested format.
