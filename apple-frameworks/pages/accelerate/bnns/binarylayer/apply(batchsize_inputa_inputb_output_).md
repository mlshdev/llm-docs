> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/binarylayer/apply(batchsize:inputa:inputb:output:)](https://developer.apple.com/documentation/accelerate/bnns/binarylayer/apply(batchsize:inputa:inputb:output:))

# apply(batchSize:inputA:inputB:output:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer to a set of input object pairs, writing the result to a set of output objects.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `inputA`: The descriptor of the first input.
- `inputB`: The descriptor of the second input.
- `output`: The descriptor of the output.

## See Also

### Applying a Binary Layer

- [applyBackward(batchSize:inputA:inputB:output:outputGradient:generatingInputAGradient:generatingInputBGradient:)](applybackward%28batchsize_inputa_inputb_output_outputgradient_generatinginputagradient_generatinginputbgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.
