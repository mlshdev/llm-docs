> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersembedding/norm_type](https://developer.apple.com/documentation/accelerate/bnnslayerparametersembedding/norm_type)

# norm_type (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

The norm type.

> Use BNNSGraph\* APIs

## Declaration

```swift
var norm_type: Float
```

<a id="Discussion"></a>

## Discussion

If `max_norm` is nonzero, this value specifies the p-norm where `p = norm_type`.

## See Also

### Instance Properties

- [flags](flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](../bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](padding_idx.md): Deprecated. The padding index.
- [max_norm](max_norm.md): Deprecated. The maximum norm.

# norm_type (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The norm type.

## Declaration

```objectivec
float norm_type;
```

<a id="Discussion"></a>

## Discussion

If `max_norm` is nonzero, this value specifies the p-norm where `p = norm_type`.

## See Also

### Instance Properties

- [flags](flags.md): Deprecated. A bit field for flags that specify additional behavior, such as scaling gradient by frequency.
- [BNNSEmbeddingFlags](../bnnsembeddingflags.md): Flags that control behavior of embedding layers.
- [i_desc](i_desc.md): Deprecated. The signed or unsigned integer descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [dictionary](dictionary.md): Deprecated. The descriptor of the dictionary.
- [padding_idx](padding_idx.md): Deprecated. The padding index.
- [max_norm](max_norm.md): Deprecated. The maximum norm.
