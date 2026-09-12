> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/embeddinglayer/applybackward(batchsize:input:output:outputgradient:generatingweightsgradient:)](https://developer.apple.com/documentation/accelerate/bnns/embeddinglayer/applybackward(batchsize:input:output:outputgradient:generatingweightsgradient:))

# applyBackward(batchSize:input:output:outputGradient:generatingWeightsGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies the layer backward to generate input gradients.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingWeightsGradient weightsGradient: BNNSNDArrayDescriptor) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `outputGradient`: The descriptor of the output gradient.
- `weightsGradient`: The descriptor of the input gradient.

## See Also

### Applying an Embedding Layer

- [apply(batchSize:input:output:)](apply%28batchsize_input_output_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
