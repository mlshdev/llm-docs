> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/normalizationlayer](https://developer.apple.com/documentation/accelerate/bnns/normalizationlayer)

# BNNS.NormalizationLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a normalization filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class NormalizationLayer
```

## Topics

### Creating a Normalization Layer

- [init(type:input:output:beta:gamma:momentum:epsilon:activation:filterParameters:)](normalizationlayer/init%28type_input_output_beta_gamma_momentum_epsilon_activation_filterparameters_%29.md): Deprecated. Returns a new normalization layer.

### Specifying a Normalization Type

- [BNNS.NormalizationType](normalizationtype.md): Deprecated. Constants that describe normalization types.

### Applying a Normalization Layer

- [apply(batchSize:input:output:for:)](normalizationlayer/apply%28batchsize_input_output_for_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingBetaGradient:generatingGammaGradient:)](normalizationlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingbetagradient_generatinggammagradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

### Specifying the Learning Phase

- [BNNS.LearningPhase](learningphase.md): Deprecated. Constants that describe the learning phase of a normalization operation.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Normalization layers

- [BNNSLayerParametersNormalization](../bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization(\_:\_:\_:)](../bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](../bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
- [BNNSNormalizationFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.
