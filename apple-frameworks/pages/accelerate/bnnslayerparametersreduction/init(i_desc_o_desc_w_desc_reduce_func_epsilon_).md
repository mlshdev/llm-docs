> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersreduction/init(i_desc:o_desc:w_desc:reduce_func:epsilon:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersreduction/init(i_desc:o_desc:w_desc:reduce_func:epsilon:))

# init(i_desc:o_desc:w_desc:reduce_func:epsilon:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a structure containing the parameters of a reduction layer from the specified parameters.

## Declaration

```swift
init(i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, w_desc: BNNSNDArrayDescriptor, reduce_func: BNNSReduceFunction, epsilon: Float)
```

## Parameters

- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `w_desc`: The descriptor of the weights.
- `reduce_func`: The variable that specifies the reduction function.
- `epsilon`: A value that the operation adds to each element when computing the sum of logarithms.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The number of input dimensions must be equal to number of output dimensions, and equal to the number of weights dimensions. The reduction layer only supports `float`, with the exception of [BNNSReduceFunctionLogicalOr](../bnnsreducefunctionlogicalor.md) and [BNNSReduceFunctionLogicalAnd](../bnnsreducefunctionlogicaland.md) that support `float` and `BNNSDataTypeBoolean`.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a structure containing the parameters of a reduction layer.
