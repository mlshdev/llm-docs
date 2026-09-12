> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/permutelayer](https://developer.apple.com/documentation/accelerate/bnns/permutelayer)

# BNNS.PermuteLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a permute filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class PermuteLayer
```

## Topics

### Creating a Permute Layer

- [init(input:output:permutation:filterParameters:)](permutelayer/init%28input_output_permutation_filterparameters_%29.md): Deprecated. Returns a new permute layer.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Permute layers

- [BNNSLayerParametersPermute](../bnnslayerparameterspermute.md): Deprecated. A structure that contains the parameters of a permute layer.
- [BNNSFilterCreateLayerPermute(\_:\_:)](../bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
- [BNNSPermuteFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:)](../bnnspermutefilterapplybackwardbatch%28____________%29.md): Deprecated. Applies a permute filter backward to generate gradients.
