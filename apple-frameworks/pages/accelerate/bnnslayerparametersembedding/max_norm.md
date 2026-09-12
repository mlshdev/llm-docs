> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersembedding/max_norm](https://developer.apple.com/documentation/accelerate/bnnslayerparametersembedding/max_norm)

# max_norm (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

The maximum norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
var max_norm: Float
```

<a id="Discussion"></a>

## Discussion

If nonzero, the operation renormalizes any vector with a norm greater than `max_norm` during forward lookups.

## See Also

### Instance Properties

- [flags](flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](../bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](padding_idx.md): Deprecated. The padding index.
- [norm_type](norm_type.md): Deprecated. The norm type.

# max_norm (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum norm.

## Declaration

```objectivec
float max_norm;
```

<a id="Discussion"></a>

## Discussion

If nonzero, the operation renormalizes any vector with a norm greater than `max_norm` during forward lookups.

## See Also

### Instance Properties

- [flags](flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](../bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](padding_idx.md): Deprecated. The padding index.
- [norm_type](norm_type.md): Deprecated. The norm type.
