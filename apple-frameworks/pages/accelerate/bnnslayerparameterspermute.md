> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspermute](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspermute)

# BNNSLayerParametersPermute (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a permute layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersPermute
```

## Topics

### Initializers

- [init(i_desc:o_desc:permutation:)](bnnslayerparameterspermute/init%28i_desc_o_desc_permutation_%29.md): Deprecated. Returns a new permute layer parameters structure from the specified parameters.
- [init()](bnnslayerparameterspermute/init%28%29.md): Deprecated. Returns a new permute layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparameterspermute/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspermute/o_desc.md): Deprecated. The descriptor of the output.
- [permutation](bnnslayerparameterspermute/permutation.md): Deprecated. The tuple that defines the permutation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Permute layers

- [BNNS.PermuteLayer](bnns/permutelayer.md): Deprecated. A layer object that wraps a permute filter and manages its deinitialization.
- [BNNSFilterCreateLayerPermute(\_:\_:)](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
- [BNNSPermuteFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:)](bnnspermutefilterapplybackwardbatch%28____________%29.md): Deprecated. Applies a permute filter backward to generate gradients.

# BNNSLayerParametersPermute (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a permute layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersPermute;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparameterspermute/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterspermute/o_desc.md): Deprecated. The descriptor of the output.
- [permutation](bnnslayerparameterspermute/permutation.md): Deprecated. The tuple that defines the permutation.

## See Also

### Permute layers

- [BNNSFilterCreateLayerPermute](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
- [BNNSPermuteFilterApplyBackwardBatch](bnnspermutefilterapplybackwardbatch%28____________%29.md): Deprecated. Applies a permute filter backward to generate gradients.
