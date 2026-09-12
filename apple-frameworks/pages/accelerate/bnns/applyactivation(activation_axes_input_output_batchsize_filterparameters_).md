> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/applyactivation(activation:axes:input:output:batchsize:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/applyactivation(activation:axes:input:output:batchsize:filterparameters:))

# applyActivation(activation:axes:input:output:batchSize:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies an activation function on the specified axes.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func applyActivation(activation: BNNS.ActivationFunction, axes: [Int], input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, batchSize: Int, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `activation`: The activation that the function applies.
- `axes`: The indices of the axes on which the function applies certain activation functions, such as [softmax](../bnnsactivationfunction/softmax.md).
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `batchSize`: The number of input-output pairs.
- `filterParameters`: The filter runtime parameters.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](../bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](../bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](../bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](../bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](../bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](../bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.
