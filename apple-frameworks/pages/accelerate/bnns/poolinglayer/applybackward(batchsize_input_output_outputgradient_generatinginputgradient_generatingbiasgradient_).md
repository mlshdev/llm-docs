> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/poolinglayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingbiasgradient:)](https://developer.apple.com/documentation/accelerate/bnns/poolinglayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingbiasgradient:))

# applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingBiasGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer backward to generate input gradients.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, generatingBiasGradient biasGradient: BNNSNDArrayDescriptor? = nil) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `outputGradient`: The descriptor of the output gradient.
- `inputGradient`: The descriptor of the input gradient.
- `biasGradient`: The descriptor of the bias gradient.

## See Also

### Applying a Pooling Layer

- [apply(batchSize:input:output:)](apply%28batchsize_input_output_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
