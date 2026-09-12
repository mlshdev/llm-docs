> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/computenormbackward(input:output:axes:outputgradient:generatinginputgradient:)](https://developer.apple.com/documentation/accelerate/bnns/computenormbackward(input:output:axes:outputgradient:generatinginputgradient:))

# computeNormBackward(input:output:axes:outputGradient:generatingInputGradient:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Backpropogates gradients for the compute norm function.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func computeNormBackward(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]? = nil, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor) throws
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `axes`: The indices of the axes over which the function computes the norm. Set to `nil` to specify that the function computes the norm over the entire tensor.
- `outputGradient`: The descriptor of the output delta.
- `inputGradient`: The descriptor of the input delta.

## See Also

### Compute norm functions

- [computeNorm(input:output:axes:)](computenorm%28input_output_axes_%29.md): Deprecated. Computes the Euclidean norm and writes the result to the output tensor.
- [BNNSComputeNorm(\_:\_:\_:\_:)](../bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSComputeNormBackward(\_:\_:\_:\_:\_:\_:)](../bnnscomputenormbackward%28____________%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSNormType](../bnnsnormtype.md): Constants that describe norm types.
