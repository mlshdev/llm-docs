> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/reductionlayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingweightsgradient:)](https://developer.apple.com/documentation/accelerate/bnns/reductionlayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingweightsgradient:))

# applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingWeightsGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer backward to generate input gradients.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, generatingWeightsGradient weightsGradient: BNNSNDArrayDescriptor? = nil) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `outputGradient`: The descriptor of the output gradient.
- `inputGradient`: The descriptor of the input gradient.
- `weightsGradient`: The descriptor of the weights gradient.
