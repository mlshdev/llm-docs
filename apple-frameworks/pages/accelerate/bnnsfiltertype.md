> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltertype](https://developer.apple.com/documentation/accelerate/bnnsfiltertype)

# BNNSFilterType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the component filters of a fused layer.

## Declaration

```swift
struct BNNSFilterType
```

## Topics

### Layer Constants

- [BNNSArithmetic](bnnsarithmetic.md): An arithmetic filter.
- [BNNSConvolution](bnnsconvolution.md): A convolution filter.
- [BNNSTransposedConvolution](bnnstransposedconvolution.md): A transposed convolution filter.
- [BNNSFullyConnected](bnnsfullyconnected.md): A fully connected filter.
- [BNNSBatchNorm](bnnsbatchnorm.md): A batch normalization filter.
- [BNNSGroupNorm](bnnsgroupnorm.md): A group normalization filter.
- [BNNSInstanceNorm](bnnsinstancenorm.md): An instance normalization filter.
- [BNNSLayerNorm](bnnslayernorm.md): A layer normalization filter.
- [BNNSQuantization](bnnsquantization.md): A quantization filter.

### Raw Values

- [rawValue](bnnsfiltertype/rawvalue.md)
- [init(\_:)](bnnsfiltertype/init%28__%29.md)
- [init(rawValue:)](bnnsfiltertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Fused layers

- [FusableLayerParameters](fusablelayerparameters.md): Deprecated.
- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.

# BNNSFilterType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the component filters of a fused layer.

## Declaration

```objectivec
typedef enum { ... } BNNSFilterType;
```

## Topics

### Layer Constants

- [BNNSArithmetic](bnnsarithmetic.md): An arithmetic filter.
- [BNNSConvolution](bnnsconvolution.md): A convolution filter.
- [BNNSTransposedConvolution](bnnstransposedconvolution.md): A transposed convolution filter.
- [BNNSFullyConnected](bnnsfullyconnected.md): A fully connected filter.
- [BNNSBatchNorm](bnnsbatchnorm.md): A batch normalization filter.
- [BNNSGroupNorm](bnnsgroupnorm.md): A group normalization filter.
- [BNNSInstanceNorm](bnnsinstancenorm.md): An instance normalization filter.
- [BNNSLayerNorm](bnnslayernorm.md): A layer normalization filter.
- [BNNSQuantization](bnnsquantization.md): A quantization filter.

## See Also

### Fused layers

- [BNNSFilterCreateFusedLayer](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
