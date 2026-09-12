> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/library/definition(named:in:)](https://developer.apple.com/documentation/computegraph/computenodegraph/library/definition(named:in:))

# definition(named:in:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns the first node definition with the given name, or `nil` if none is found.

## Declaration

```swift
final func definition(named name: String, in bundle: String? = nil) -> ComputeNodeGraph.NodeDefinition?
```

<a id="discussion"></a>

## Discussion

Pass `nil` for `bundle` to search across all bundles.
