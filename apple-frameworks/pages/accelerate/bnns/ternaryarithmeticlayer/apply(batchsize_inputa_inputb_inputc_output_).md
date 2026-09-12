> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/ternaryarithmeticlayer/apply(batchsize:inputa:inputb:inputc:output:)](https://developer.apple.com/documentation/accelerate/bnns/ternaryarithmeticlayer/apply(batchsize:inputa:inputb:inputc:output:))

# apply(batchSize:inputA:inputB:inputC:output:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies the layer to a set of input array descriptors, writing the result to a set of output array descriptors.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, inputC: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `inputA`: The descriptor of the first input.
- `inputB`: The descriptor of the second input.
- `inputC`: The descriptor of the third input.
- `output`: The descriptor of the output.

## See Also

### Applying a Ternary Arithmetic Layer

- [applyBackward(batchSize:inputA:inputB:inputC:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingInputCGradient:)](applybackward%28batchsize_inputa_inputb_inputc_output_outputgradient_generatinginputagradient_generatinginputbgradient_generatinginputcgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.
