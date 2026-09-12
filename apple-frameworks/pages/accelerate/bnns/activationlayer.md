> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/activationlayer](https://developer.apple.com/documentation/accelerate/bnns/activationlayer)

# BNNS.ActivationLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps an activation filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class ActivationLayer
```

## Topics

### Creating an Activation Layer

- [init(function:input:output:filterParameters:)](activationlayer/init%28function_input_output_filterparameters_%29.md): Deprecated. Returns a new activation layer.

### Specifying an Activation Function

- [BNNS.ActivationFunction](activationfunction.md): Deprecated. Constants that describe activation functions.

### Directly Applying Activation

- [applyActivation(activation:input:output:batchSize:filterParameters:)](applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

### Initializers

- [init(function:axes:input:output:filterParameters:)](activationlayer/init%28function_axes_input_output_filterparameters_%29.md): Deprecated.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](../bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](../bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](../bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](../bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](../bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](../bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.
