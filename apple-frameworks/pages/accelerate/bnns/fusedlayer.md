> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedlayer](https://developer.apple.com/documentation/accelerate/bnns/fusedlayer)

# BNNS.FusedLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The base class for fused convolution-normalization and fully connected-normalization layers.

> Use the BNNSGraph API instead.

## Declaration

```swift
class FusedLayer
```

## Topics

### Applying a Fused Layer

- [apply(batchSize:input:output:for:)](fusedlayer/apply%28batchsize_input_output_for_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingParameterGradients:)](fusedlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

### Inherited By

- [BNNS.FusedConvolutionNormalizationLayer](fusedconvolutionnormalizationlayer.md)
- [BNNS.FusedFullyConnectedNormalizationLayer](fusedfullyconnectednormalizationlayer.md)
- [BNNS.FusedParametersLayer](fusedparameterslayer.md)
