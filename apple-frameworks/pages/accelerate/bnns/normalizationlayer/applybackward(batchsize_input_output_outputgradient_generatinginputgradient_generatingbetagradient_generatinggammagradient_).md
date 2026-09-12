> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/normalizationlayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingbetagradient:generatinggammagradient:)](https://developer.apple.com/documentation/accelerate/bnns/normalizationlayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingbetagradient:generatinggammagradient:))

# applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingBetaGradient:generatingGammaGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer backward to generate input gradients.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, generatingBetaGradient betaGradient: BNNSNDArrayDescriptor? = nil, generatingGammaGradient gammaGradient: BNNSNDArrayDescriptor? = nil) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `outputGradient`: The descriptor of the output gradient.
- `inputGradient`: The descriptor of the input gradient.
- `betaGradient`: The descriptor of the beta gradient.
- `gammaGradient`: The descriptor of the gamma gradient.

## See Also

### Applying a Normalization Layer

- [apply(batchSize:input:output:for:)](apply%28batchsize_input_output_for_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
