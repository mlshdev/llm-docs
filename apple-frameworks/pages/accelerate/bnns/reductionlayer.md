> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/reductionlayer](https://developer.apple.com/documentation/accelerate/bnns/reductionlayer)

# BNNS.ReductionLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a reduction filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class ReductionLayer
```

## Topics

### Creating a Reduction Layer

- [init(function:input:output:weights:filterParameters:)](reductionlayer/init%28function_input_output_weights_filterparameters_%29.md): Deprecated. Returns a new reduction layer.

### Specifying a Reduction Function

- [BNNS.ReductionFunction](reductionfunction.md): Constants that describe reduction functions.

### Applying a Reduction Layer

- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingWeightsGradient:)](reductionlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingweightsgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

### Directly Applying Reduction

- [applyReduction(\_:input:output:weights:filterParameters:)](applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Reduction layers

- [applyReduction(\_:input:output:weights:filterParameters:)](applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [BNNSReduceFunction](../bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](../bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction(\_:\_:)](../bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction(\_:\_:)](../bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.
