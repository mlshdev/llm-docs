> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/conv(weight:strides:bias:padding:dilations:groupcount:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/conv(weight:strides:bias:padding:dilations:groupcount:))

# conv(weight:strides:bias:padding:dilations:groupCount:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a convolution operation to the current graph.

## Declaration

```swift
func conv(weight: some BNNSGraph.Builder.OperationParameter<T>, strides: [Int], bias: some BNNSGraph.Builder.OperationParameter<T>, padding: BNNSGraph.Builder.ConvolutionPadding, dilations: [Int]? = nil, groupCount: Int = 1) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `weight`: The convolution weights.
- `strides`: An array that contains the kernel stride for each spatial dimension.
- `bias`: The bias.
- `padding`: An enumeration that specifies that the operation computes the padding from the input and output shapes. If you specify `custom`, pass twice the number of spatial dimensions.
- `dilations`: An array that contains the kernel dilation for each spatial dimension.
- `groupCount`: The number of convolution groups. Pass `1` to specify non-grouped convolution.

<a id="discussion"></a>

## Discussion

This operation assumes the source tensor is in  `(N, C, spatial dimensions...)` format, where the number of spatial dimensions is either `1` or `2`.
