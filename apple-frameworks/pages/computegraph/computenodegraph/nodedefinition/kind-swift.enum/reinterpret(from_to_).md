> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum/reinterpret(from:to:)](https://developer.apple.com/documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum/reinterpret(from:to:))

# ComputeNodeGraph.NodeDefinition.Kind.reinterpret(from:to:)

**Framework:** Compute Graph  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Reinterpret one type scalar or vector type as another of the same number of size and bytes.

## Declaration

```swift
case reinterpret(from: ComputeNodeGraph.DataType, to: ComputeNodeGraph.DataType)
```

<a id="discussion"></a>

## Discussion

Equivalent to calling Metal’s `as_type<>`
