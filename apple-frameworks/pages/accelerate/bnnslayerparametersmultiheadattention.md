> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersmultiheadattention](https://developer.apple.com/documentation/accelerate/bnnslayerparametersmultiheadattention)

# BNNSLayerParametersMultiheadAttention (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a multihead attention layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersMultiheadAttention
```

## Topics

### Initializers

- [init(query:key:value:add_zero_attn:key_attn_bias:value_attn_bias:output:dropout:seed:)](bnnslayerparametersmultiheadattention/init%28query_key_value_add_zero_attn_key_attn_bias_value_attn_bias_output_dropout_seed_%29.md): Deprecated. Returns a new multihead attention layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersmultiheadattention/init%28%29.md): Deprecated. Returns a new multihead attention layer parameters structure.

### Instance Properties

- [query](bnnslayerparametersmultiheadattention/query.md): Deprecated. A projection parameter structure that describes the query-related input parameters and projection.
- [key](bnnslayerparametersmultiheadattention/key.md): Deprecated. A projection parameter structure that describes the key-related input parameters and projection.
- [value](bnnslayerparametersmultiheadattention/value.md): Deprecated. A projection parameter structure that describes the value-related input parameters and projection.
- [add_zero_attn](bnnslayerparametersmultiheadattention/add_zero_attn.md): Deprecated. A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.
- [key_attn_bias](bnnslayerparametersmultiheadattention/key_attn_bias.md): Deprecated. A 2D tensor that’s added to the value as part of the attention calculation.
- [value_attn_bias](bnnslayerparametersmultiheadattention/value_attn_bias.md): Deprecated. An optional `d_value` x `num_heads` 2D tensor that’s added as part of the attention calculation.
- [output](bnnslayerparametersmultiheadattention/output.md): Deprecated. A projection parameter structure that describes the output tensor and associated projection.
- [dropout](bnnslayerparametersmultiheadattention/dropout.md): Deprecated. The seed for the dropout layer’s random number generator.
- [seed](bnnslayerparametersmultiheadattention/seed.md): Deprecated. A random seed for the dropout layer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSFilterCreateLayerMultiheadAttention(\_:\_:)](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

# BNNSLayerParametersMultiheadAttention (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a multihead attention layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersMultiheadAttention;
```

## Topics

### Instance Properties

- [query](bnnslayerparametersmultiheadattention/query.md): Deprecated. A projection parameter structure that describes the query-related input parameters and projection.
- [key](bnnslayerparametersmultiheadattention/key.md): Deprecated. A projection parameter structure that describes the key-related input parameters and projection.
- [value](bnnslayerparametersmultiheadattention/value.md): Deprecated. A projection parameter structure that describes the value-related input parameters and projection.
- [add_zero_attn](bnnslayerparametersmultiheadattention/add_zero_attn.md): Deprecated. A Boolean value that, if true, adds a row of zeroes to the projected *K* and *V* inputs to the calculation.
- [key_attn_bias](bnnslayerparametersmultiheadattention/key_attn_bias.md): Deprecated. A 2D tensor that’s added to the value as part of the attention calculation.
- [value_attn_bias](bnnslayerparametersmultiheadattention/value_attn_bias.md): Deprecated. An optional `d_value` x `num_heads` 2D tensor that’s added as part of the attention calculation.
- [output](bnnslayerparametersmultiheadattention/output.md): Deprecated. A projection parameter structure that describes the output tensor and associated projection.
- [dropout](bnnslayerparametersmultiheadattention/dropout.md): Deprecated. The seed for the dropout layer’s random number generator.
- [seed](bnnslayerparametersmultiheadattention/seed.md): Deprecated. A random seed for the dropout layer.

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSFilterCreateLayerMultiheadAttention](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.
