> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/library/merge(contentsof:)](https://developer.apple.com/documentation/computegraph/computenodegraph/library/merge(contentsof:))

# merge(contentsOf:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Merges nodes from specified library into this library.

## Declaration

```swift
final func merge(contentsOf library: ComputeNodeGraph.Library)
```

<a id="discussion"></a>

## Discussion

Use this method to merge libraries. If two nodes have the same name and bundle, the nodes in `library` will replace ones in `self`.
