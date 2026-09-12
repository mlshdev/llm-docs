> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/pipelines/init(_:)-2h68e](https://developer.apple.com/documentation/computegraph/computenodegraph/pipelines/init(_:)-2h68e)

# init(\_:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Assembles and compiles pipelines from the provided graph.

## Declaration

```swift
init(_ graph: ComputeNodeGraph) async throws
```

<a id="discussion"></a>

## Discussion

Compilation is performed asynchronously.
