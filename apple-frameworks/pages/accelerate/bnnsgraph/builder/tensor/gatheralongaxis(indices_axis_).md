> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/gatheralongaxis(indices:axis:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/gatheralongaxis(indices:axis:))

# gatherAlongAxis(indices:axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a gather-along-axis operation to the current graph.

## Declaration

```swift
func gatherAlongAxis(indices: some BNNSGraph.Builder.OperationParameter<Int32>, axis: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `indices`: The indices that the operation gathers.
- `axis`: The axis over which the operation gathers.

<a id="discussion"></a>

## Discussion

Register a gather along axis op, which shuffles the input along one axis. In particular, output `y` such that \`y\[L…, i, T…\] = x\[L…, indices\[L…, i, T…\], T…\].
