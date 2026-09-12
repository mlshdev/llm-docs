> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedparameterslayer/applybackward(batchsize:inputa:inputb:inputc:output:outputgradient:generatinginputagradient:generatinginputbgradient:generatinginputcgradient:generatingparametergradients:)](https://developer.apple.com/documentation/accelerate/bnns/fusedparameterslayer/applybackward(batchsize:inputa:inputb:inputc:output:outputgradient:generatinginputagradient:generatinginputbgradient:generatinginputcgradient:generatingparametergradients:))

# applyBackward(batchSize:inputA:inputB:inputC:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingInputCGradient:generatingParameterGradients:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies the layer backward to generate input gradients, where the first layer accepts three inputs.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(batchSize: Int, inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, inputC: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputAGradient inputAGradient: BNNSNDArrayDescriptor, generatingInputBGradient inputBGradient: BNNSNDArrayDescriptor, generatingInputCGradient inputCGradient: BNNSNDArrayDescriptor, generatingParameterGradients parameterGradients: [BNNSNDArrayDescriptor]) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `inputA`: The descriptor of the first input.
- `inputB`: The descriptor of the second input.
- `inputC`: The descriptor of the third input.
- `output`: The descriptor of the output.
- `outputGradient`: The descriptor of the output gradient.
- `inputAGradient`: The descriptor of the input gradient.
- `inputBGradient`: The descriptor of the input gradient.
- `inputCGradient`: The descriptor of the input gradient.
- `parameterGradients`: An array that contains the parameter gradients.

## See Also

### Applying a Fused Parameters Layer

- [apply(batchSize:inputA:inputB:output:for:)](apply%28batchsize_inputa_inputb_output_for_%29.md): Deprecated. Applies the layer to a set of input objects and writes the result to a set of output objects, where the first layer accepts two inputs.
- [apply(batchSize:inputA:inputB:inputC:output:for:)](apply%28batchsize_inputa_inputb_inputc_output_for_%29.md): Deprecated. Applies the layer to a set of input objects and writes the result to a set of output objects, where the first layer accepts two inputs.
- [applyBackward(batchSize:inputA:inputB:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingParameterGradients:)](applybackward%28batchsize_inputa_inputb_output_outputgradient_generatinginputagradient_generatinginputbgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients, where the first layer accepts two inputs.
