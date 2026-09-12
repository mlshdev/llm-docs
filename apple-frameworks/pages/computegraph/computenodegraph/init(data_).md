> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/init(data:)](https://developer.apple.com/documentation/computegraph/computenodegraph/init(data:))

# init(data:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Creates a graph by decoding a computegraph.

## Declaration

```swift
init(data: Data) throws
```

## Parameters

- `data`: The encoded graph data to decode.

<a id="discussion"></a>

## Discussion

This initializer infers the serialization format from the contents of `data`, so you can pass data produced by [data(using:)](data%28using_%29.md) regardless of the [ComputeNodeGraph.Format](format.md) you chose when encoding.

> **Throws**

> An error if `data` isn’t a recognized graph format, or if the contents can’t be decoded into a valid graph.
