> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedconvolutionparameters](https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionparameters)

# BNNS.FusedConvolutionParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A structure that contains the parameters for a fused convolution layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct FusedConvolutionParameters
```

## Topics

### Creating a Fused Convolution Parameters Structure

- [init(type:weights:bias:stride:dilationStride:groupSize:padding:)](fusedconvolutionparameters/init%28type_weights_bias_stride_dilationstride_groupsize_padding_%29.md): Deprecated. Returns a new fused convolution parameters structure.

### Inspecting the Properties of a Fused Convolution Parameters Structure

- [type](fusedconvolutionparameters/type.md): Deprecated. An enumeration that specifies the convolution type.
- [weights](fusedconvolutionparameters/weights.md): Deprecated. The descriptor of the weights.
- [bias](fusedconvolutionparameters/bias.md): Deprecated. The descriptor of the bias.
- [stride](fusedconvolutionparameters/stride.md): Deprecated. The width and height increments of the input image.
- [dilationStride](fusedconvolutionparameters/dilationstride.md): Deprecated. The width and height increments between elements in the input image during convolution.
- [groupSize](fusedconvolutionparameters/groupsize.md): Deprecated. The convolution group size.
- [padding](fusedconvolutionparameters/padding.md): Deprecated. The number of zeros that the operation virtually adds to the edges of the input.

## Relationships

### Conforms To

- [FusableLayerParameters](../fusablelayerparameters.md)

## See Also

### Specifying a Layer Parameter

- [BNNS.FusedUnaryArithmeticParameters](fusedunaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused unary arithmetic layer.
- [BNNS.FusedBinaryArithmeticParameters](fusedbinaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused binary arithmetic layer.
- [BNNS.FusedTernaryArithmeticParameters](fusedternaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused ternary arithmetic layer.
- [BNNS.FusedQuantizationParameters](fusedquantizationparameters.md): Deprecated. A structure that contains the parameters for a fused quantization layer.
- [BNNS.FusedDequantizationParameters](fuseddequantizationparameters.md): Deprecated. A structure that contains the parameters for a fused dequantization layer.
- [BNNS.FusedFullyConnectedParameters](fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
- [BNNS.FusedNormalizationParameters](fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.
