> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersquantization/init(axis_mask:function:i_desc:o_desc:scale:bias:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersquantization/init(axis_mask:function:i_desc:o_desc:scale:bias:))

# init(axis_mask:function:i_desc:o_desc:scale:bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Returns a new quantization layer parameters structure using the supplied parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(axis_mask: Int, function: BNNSQuantizerFunction, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, scale: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor)
```

## Parameters

- `axis_mask`: A bitmask that defines the axis to which the function applies scale and bias. Set to `0` to apply scale and bias to the entire tensor.
- `function`: The quantize function.
- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `scale`: The descriptor of the scale.
- `bias`: The descriptor of the bias.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new quantization layer parameters structure.
