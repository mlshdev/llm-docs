> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersfullyconnected/init(i_desc:w_desc:o_desc:bias:activation:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersfullyconnected/init(i_desc:w_desc:o_desc:bias:activation:))

# init(i_desc:w_desc:o_desc:bias:activation:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new fully connected layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(i_desc: BNNSNDArrayDescriptor, w_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor, activation: BNNSActivation)
```

## Parameters

- `i_desc`: The descriptor of the input.
- `w_desc`: The descriptor of the weights.
- `o_desc`: The descriptor of the output.
- `bias`: The descriptor of the bias.
- `activation`: The activation function that the layer applies to the output.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input data type and the weights data type must be equal and be `float`, `float16`, `int8`, or `int16` for the forward pass. The output data type must be `float` for the forward pass. All three arrays must be `float` for the backward pass.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new fully connected layer parameters structure.
