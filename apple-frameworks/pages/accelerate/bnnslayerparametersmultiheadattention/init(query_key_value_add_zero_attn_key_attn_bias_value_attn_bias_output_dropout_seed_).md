> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersmultiheadattention/init(query:key:value:add_zero_attn:key_attn_bias:value_attn_bias:output:dropout:seed:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/init(query:key:value:add_zero_attn:key_attn_bias:value_attn_bias:output:dropout:seed:))

# init(query:key:value:add_zero_attn:key_attn_bias:value_attn_bias:output:dropout:seed:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new multihead attention layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(query: BNNSMHAProjectionParameters, key: BNNSMHAProjectionParameters, value: BNNSMHAProjectionParameters, add_zero_attn: Bool, key_attn_bias: BNNSNDArrayDescriptor, value_attn_bias: BNNSNDArrayDescriptor, output: BNNSMHAProjectionParameters, dropout: Float, seed: UInt32)
```

## Parameters

- `query`: A projection parameter structure that describes the query-related input parameters and projection.
- `key`: A projection parameter structure that describes the key-related input parameters and projection.
- `value`: A projection parameter structure that describes the value-related input parameters and projection.
- `add_zero_attn`: A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.
- `key_attn_bias`: A 2D tensor that’s added to the key as part of the attention calculation.
- `value_attn_bias`: A 2D tensor that’s added to the value as part of the attention calculation.
- `output`: A projection parameter structure that describes the output tensor and associated projection.
- `dropout`: The probability that the layer drops out an element.
- `seed`: The seed for the dropout layer’s random number generator.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new multihead attention layer parameters structure.
