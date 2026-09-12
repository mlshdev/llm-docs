> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedconvolutionparameters/bias](https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionparameters/bias)

# bias

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The descriptor of the bias.

> Use the BNNSGraph API instead.

## Declaration

```swift
var bias: BNNSNDArrayDescriptor?
```

## See Also

### Inspecting the Properties of a Fused Convolution Parameters Structure

- [type](type.md): Deprecated. An enumeration that specifies the convolution type.
- [weights](weights.md): Deprecated. The descriptor of the weights.
- [stride](stride.md): Deprecated. The width and height increments of the input image.
- [dilationStride](dilationstride.md): Deprecated. The width and height increments between elements in the input image during convolution.
- [groupSize](groupsize.md): Deprecated. The convolution group size.
- [padding](padding.md): Deprecated. The number of zeros that the operation virtually adds to the edges of the input.
