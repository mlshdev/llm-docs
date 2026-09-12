> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/embeddinglayer/apply(batchsize:input:output:)](https://developer.apple.com/documentation/accelerate/bnns/embeddinglayer/apply(batchsize:input:output:))

# apply(batchSize:input:output:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies the layer to a set of input objects, writing the result to a set of output objects.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.

## See Also

### Applying an Embedding Layer

- [applyBackward(batchSize:input:output:outputGradient:generatingWeightsGradient:)](applybackward%28batchsize_input_output_outputgradient_generatingweightsgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.
