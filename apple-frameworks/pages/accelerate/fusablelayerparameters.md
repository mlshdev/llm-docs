> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/fusablelayerparameters](https://developer.apple.com/documentation/accelerate/fusablelayerparameters)

# FusableLayerParameters

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

> Use the BNNSGraph API instead.

## Declaration

```swift
protocol FusableLayerParameters
```

## Relationships

### Conforming Types

- [BNNS.FusedBinaryArithmeticParameters](bnns/fusedbinaryarithmeticparameters.md)
- [BNNS.FusedConvolutionParameters](bnns/fusedconvolutionparameters.md)
- [BNNS.FusedDequantizationParameters](bnns/fuseddequantizationparameters.md)
- [BNNS.FusedFullyConnectedParameters](bnns/fusedfullyconnectedparameters.md)
- [BNNS.FusedNormalizationParameters](bnns/fusednormalizationparameters.md)
- [BNNS.FusedQuantizationParameters](bnns/fusedquantizationparameters.md)
- [BNNS.FusedTernaryArithmeticParameters](bnns/fusedternaryarithmeticparameters.md)
- [BNNS.FusedUnaryArithmeticParameters](bnns/fusedunaryarithmeticparameters.md)

## See Also

### Fused layers

- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
