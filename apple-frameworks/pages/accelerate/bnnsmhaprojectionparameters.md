> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsmhaprojectionparameters](https://developer.apple.com/documentation/accelerate/bnnsmhaprojectionparameters)

# BNNSMHAProjectionParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains multihead attention projection parameters.

## Declaration

```swift
struct BNNSMHAProjectionParameters
```

## Topics

### Initializers

- [init(target_desc:weights:bias:)](bnnsmhaprojectionparameters/init%28target_desc_weights_bias_%29.md): Returns a new multihead attention projection parameters structure from the specified parameters.
- [init()](bnnsmhaprojectionparameters/init%28%29.md): Returns a new multihead attention projection parameters structure.

### Instance Properties

- [target_desc](bnnsmhaprojectionparameters/target_desc.md): The descriptor—which is either an input query, key, or value, or an output—of the main target of the operation.
- [weights](bnnsmhaprojectionparameters/weights.md): The descriptor of the initial projection’s weights.
- [bias](bnnsmhaprojectionparameters/bias.md): The descriptor of the initial projection’s bias.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Multihead attention layers

- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention(\_:\_:)](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

# BNNSMHAProjectionParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains multihead attention projection parameters.

## Declaration

```objectivec
typedef struct { ... } BNNSMHAProjectionParameters;
```

## Topics

### Instance Properties

- [target_desc](bnnsmhaprojectionparameters/target_desc.md): The descriptor—which is either an input query, key, or value, or an output—of the main target of the operation.
- [weights](bnnsmhaprojectionparameters/weights.md): The descriptor of the initial projection’s weights.
- [bias](bnnsmhaprojectionparameters/bias.md): The descriptor of the initial projection’s bias.

## See Also

### Multihead attention layers

- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttention](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.
