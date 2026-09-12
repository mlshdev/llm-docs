> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/pooling(_:kernelsize:strides:padding:ceilingmode:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pooling(_:kernelsize:strides:padding:ceilingmode:))

# pooling(\_:kernelSize:strides:padding:ceilingMode:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a pooling operation to the current graph.

## Declaration

```swift
func pooling(_ function: BNNSGraph.Builder.PoolingFunction, kernelSize: [Int], strides: [Int], padding: BNNSGraph.Builder.PoolingPadding, ceilingMode: BNNSGraph.Builder.CeilingMode) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `function`: An enumeration that specifies the pooling function.
- `kernelSize`: The size of the pooling kernel.
- `strides`: An array that contains the kernel stride for each spatial dimension.
- `padding`: An enumeration that specifies that the operation computes the padding from the input and output shapes. If you specify `custom`, pass twice the number of spatial dimensions.
- `ceilingMode`: An enumeration that specifies how the operation rounds when calculating the output size.

<a id="discussion"></a>

## Discussion

This operation assumes the source tensor is in  `(N, C, spatial dimensions...)` format, where the number of spatial dimensions is either `1` or `2`
