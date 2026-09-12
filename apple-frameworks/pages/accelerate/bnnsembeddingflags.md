> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsembeddingflags](https://developer.apple.com/documentation/accelerate/bnnsembeddingflags)

# BNNSEmbeddingFlags (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags that control behavior of embedding layers.

## Declaration

```swift
struct BNNSEmbeddingFlags
```

## Topics

### Embedding Flags

- [init(\_:)](bnnsembeddingflags/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsembeddingflags/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsembeddingflags/rawvalue.md): The corresponding value of the raw type.
- [BNNSEmbeddingFlagScaleGradientByFrequency](bnnsembeddingflagscalegradientbyfrequency.md): A flag that specifies that the operation scales calculated gradients based on the number of occurrence of the corresponding index in the input.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [flags](bnnslayerparametersembedding/flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [i_desc](bnnslayerparametersembedding/i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](bnnslayerparametersembedding/o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](bnnslayerparametersembedding/dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](bnnslayerparametersembedding/padding_idx.md): Deprecated. The padding index.
- [max_norm](bnnslayerparametersembedding/max_norm.md): Deprecated. The maximum norm.
- [norm_type](bnnslayerparametersembedding/norm_type.md): Deprecated. The norm type.

# BNNSEmbeddingFlags (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags that control behavior of embedding layers.

## Declaration

```objectivec
typedef enum { ... } BNNSEmbeddingFlags;
```

## Topics

### Embedding Flags

- [BNNSEmbeddingFlagScaleGradientByFrequency](bnnsembeddingflagscalegradientbyfrequency.md): A flag that specifies that the operation scales calculated gradients based on the number of occurrence of the corresponding index in the input.

## See Also

### Instance Properties

- [flags](bnnslayerparametersembedding/flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [i_desc](bnnslayerparametersembedding/i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](bnnslayerparametersembedding/o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](bnnslayerparametersembedding/dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](bnnslayerparametersembedding/padding_idx.md): Deprecated. The padding index.
- [max_norm](bnnslayerparametersembedding/max_norm.md): Deprecated. The maximum norm.
- [norm_type](bnnslayerparametersembedding/norm_type.md): Deprecated. The norm type.
