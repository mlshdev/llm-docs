> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedlayer/apply(batchsize:input:output:for:)](https://developer.apple.com/documentation/accelerate/bnns/fusedlayer/apply(batchsize:input:output:for:))

# apply(batchSize:input:output:for:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer to a set of input objects, writing the result to a set of output objects.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, for learningPhase: BNNS.LearningPhase) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `learningPhase`: An enumeration that specifies whether the function call context is training or inference.

## See Also

### Applying a Fused Layer

- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingParameterGradients:)](applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients.
