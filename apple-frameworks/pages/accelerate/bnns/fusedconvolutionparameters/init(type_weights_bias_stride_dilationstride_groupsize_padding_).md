> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedconvolutionparameters/init(type:weights:bias:stride:dilationstride:groupsize:padding:)](https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionparameters/init(type:weights:bias:stride:dilationstride:groupsize:padding:))

# init(type:weights:bias:stride:dilationStride:groupSize:padding:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new fused convolution parameters structure.

> Use the BNNSGraph API instead.

## Declaration

```swift
init(type: BNNS.ConvolutionType, weights: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor?, stride: (x: Int, y: Int), dilationStride: (x: Int, y: Int), groupSize: Int, padding: BNNS.ConvolutionPadding)
```

## Parameters

- `type`: An enumeration that specifies the convolution type.
- `weights`: The descriptor of the weights.
- `bias`: The descriptor of the bias.
- `stride`: The width and height increments of the input image.
- `dilationStride`: The width and height increments between elements in the input image during convolution.
- `groupSize`: The convolution group size.
- `padding`: The number of zeros that the operation virtually adds to the edges of the input.
