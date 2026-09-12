> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedconvolutionnormalizationlayer](https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionnormalizationlayer)

# BNNS.FusedConvolutionNormalizationLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class FusedConvolutionNormalizationLayer
```

## Topics

### Creating a Fused Convolution Normalization Layer

- [init(input:output:convolutionWeights:convolutionBias:convolutionStride:convolutionDilationStride:convolutionPadding:normalization:normalizationBeta:normalizationGamma:normalizationMomentum:normalizationEpsilon:normalizationActivation:filterParameters:)](fusedconvolutionnormalizationlayer/init%28input_output_convolutionweights_convolutionbias_convolutionstride_convolutiondilationstride_convolutionpadding_normalization_normalizationbeta_normalizationgamma_normalization~2503b4c0.md): Deprecated. Returns a new fused, convolution normalization layer.

### Applying a Fused Layer

- [apply(batchSize:input:output:for:)](fusedlayer/apply%28batchsize_input_output_for_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingParameterGradients:)](fusedlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients.

### Specifying the Learning Phase

- [BNNS.LearningPhase](learningphase.md): Deprecated. Constants that describe the learning phase of a normalization operation.

## Relationships

### Inherits From

- [BNNS.FusedLayer](fusedlayer.md)

## See Also

### Fused layers

- [FusableLayerParameters](../fusablelayerparameters.md): Deprecated.
- [BNNS.FusedParametersLayer](fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](../bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](../bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
