> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum/convert(from:to:)](https://developer.apple.com/documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum/convert(from:to:))

# ComputeNodeGraph.NodeDefinition.Kind.convert(from:to:)

**Framework:** Compute Graph  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Convert from one primitive MTLDataType to another.

## Declaration

```swift
case convert(from: ComputeNodeGraph.DataType, to: ComputeNodeGraph.DataType)
```

<a id="discussion"></a>

## Discussion

Equivalent to calling Metal’s constructor of `to` with a value of type `from`
