> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersembedding](https://developer.apple.com/documentation/accelerate/bnnslayerparametersembedding)

# BNNSLayerParametersEmbedding (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

A structure that contains the parameters of an embedding layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersEmbedding
```

## Topics

### Initializers

- [init()](bnnslayerparametersembedding/init%28%29.md): Deprecated. Returns a new embedding layer parameters structure.
- [init(flags:i_desc:o_desc:dictionary:padding_idx:max_norm:norm_type:)](bnnslayerparametersembedding/init%28flags_i_desc_o_desc_dictionary_padding_idx_max_norm_norm_type_%29.md): Deprecated. Returns a new embedding layer parameter structure from the specified parameters.

### Instance Properties

- [flags](bnnslayerparametersembedding/flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](bnnslayerparametersembedding/i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](bnnslayerparametersembedding/o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](bnnslayerparametersembedding/dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](bnnslayerparametersembedding/padding_idx.md): Deprecated. The padding index.
- [max_norm](bnnslayerparametersembedding/max_norm.md): Deprecated. The maximum norm.
- [norm_type](bnnslayerparametersembedding/norm_type.md): Deprecated. The norm type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Embedding layers

- [BNNS.EmbeddingLayer](bnns/embeddinglayer.md): Deprecated. A layer object that wraps an embedding filter and manages its deinitialization.
- [BNNSFilterCreateLayerEmbedding(\_:\_:)](bnnsfiltercreatelayerembedding%28____%29.md): Deprecated. Returns a new embedding layer.

# BNNSLayerParametersEmbedding (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of an embedding layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersEmbedding;
```

## Topics

### Instance Properties

- [flags](bnnslayerparametersembedding/flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](bnnslayerparametersembedding/i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](bnnslayerparametersembedding/o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](bnnslayerparametersembedding/dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](bnnslayerparametersembedding/padding_idx.md): Deprecated. The padding index.
- [max_norm](bnnslayerparametersembedding/max_norm.md): Deprecated. The maximum norm.
- [norm_type](bnnslayerparametersembedding/norm_type.md): Deprecated. The norm type.

## See Also

### Embedding layers

- [BNNSFilterCreateLayerEmbedding](bnnsfiltercreatelayerembedding%28____%29.md): Deprecated. Returns a new embedding layer.
