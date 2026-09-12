> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/unarylayer](https://developer.apple.com/documentation/accelerate/bnns/unarylayer)

# BNNS.UnaryLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The base class for layers that accept a single input.

> Use the BNNSGraph API instead.

## Declaration

```swift
class UnaryLayer
```

## Topics

### Applying a Unary Layer

- [apply(batchSize:input:output:)](unarylayer/apply%28batchsize_input_output_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:)](unarylayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

### Inherited By

- [BNNS.ActivationLayer](activationlayer.md)
- [BNNS.ConvolutionLayer](convolutionlayer.md)
- [BNNS.DropoutLayer](dropoutlayer.md)
- [BNNS.GramLayer](gramlayer.md)
- [BNNS.PaddingLayer](paddinglayer.md)
- [BNNS.PermuteLayer](permutelayer.md)
- [BNNS.ReductionLayer](reductionlayer.md)
- [BNNS.ResizeLayer](resizelayer.md)

## See Also

### Base Classes

- [BNNS.Layer](layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.BinaryLayer](binarylayer.md): Deprecated. The base class for layers that accept two inputs.
