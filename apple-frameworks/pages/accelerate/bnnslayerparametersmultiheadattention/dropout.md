> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersmultiheadattention/dropout](https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention/dropout)

# dropout (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The seed for the dropout layer’s random number generator.

> Use BNNSGraph\* APIs

## Declaration

```swift
var dropout: Float
```

## See Also

### Instance Properties

- [query](query.md): Deprecated. A projection parameter structure that describes the query-related input parameters and projection.
- [key](key.md): Deprecated. A projection parameter structure that describes the key-related input parameters and projection.
- [value](value.md): Deprecated. A projection parameter structure that describes the value-related input parameters and projection.
- [add_zero_attn](add_zero_attn.md): Deprecated. A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.
- [key_attn_bias](key_attn_bias.md): Deprecated. A 2D tensor that’s added to the value as part of the attention calculation.
- [value_attn_bias](value_attn_bias.md): Deprecated. An optional `d_value` x `num_heads` 2D tensor that’s added as part of the attention calculation.
- [output](output.md): Deprecated. A projection parameter structure that describes the output tensor and associated projection.
- [seed](seed.md): Deprecated. A random seed for the dropout layer.

# dropout (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The seed for the dropout layer’s random number generator.

## Declaration

```objectivec
float dropout;
```

## See Also

### Instance Properties

- [query](query.md): Deprecated. A projection parameter structure that describes the query-related input parameters and projection.
- [key](key.md): Deprecated. A projection parameter structure that describes the key-related input parameters and projection.
- [value](value.md): Deprecated. A projection parameter structure that describes the value-related input parameters and projection.
- [add_zero_attn](add_zero_attn.md): Deprecated. A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.
- [key_attn_bias](key_attn_bias.md): Deprecated. A 2D tensor that’s added to the value as part of the attention calculation.
- [value_attn_bias](value_attn_bias.md): Deprecated. An optional `d_value` x `num_heads` 2D tensor that’s added as part of the attention calculation.
- [output](output.md): Deprecated. A projection parameter structure that describes the output tensor and associated projection.
- [seed](seed.md): Deprecated. A random seed for the dropout layer.
