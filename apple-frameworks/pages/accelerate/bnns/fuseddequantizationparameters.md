> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fuseddequantizationparameters](https://developer.apple.com/documentation/accelerate/bnns/fuseddequantizationparameters)

# BNNS.FusedDequantizationParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A structure that contains the parameters for a fused dequantization layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct FusedDequantizationParameters
```

## Topics

### Creating a Fused Dequantization Parameters Structure

- [init(scale:bias:)](fuseddequantizationparameters/init%28scale_bias_%29.md): Deprecated. Returns a new fused dequantization parameters structure.

### Inspecting the Properties of a Fused Dequantization Parameters Structure

- [scale](fuseddequantizationparameters/scale.md): Deprecated. The descriptor of the scale.
- [bias](fuseddequantizationparameters/bias.md): Deprecated. The descriptor of the bias.
- [axis](fuseddequantizationparameters/axis.md): Deprecated. The index of the axis on which the function applies scale and bias.

## Relationships

### Conforms To

- [FusableLayerParameters](../fusablelayerparameters.md)

## See Also

### Specifying a Layer Parameter

- [BNNS.FusedUnaryArithmeticParameters](fusedunaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused unary arithmetic layer.
- [BNNS.FusedBinaryArithmeticParameters](fusedbinaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused binary arithmetic layer.
- [BNNS.FusedTernaryArithmeticParameters](fusedternaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused ternary arithmetic layer.
- [BNNS.FusedConvolutionParameters](fusedconvolutionparameters.md): Deprecated. A structure that contains the parameters for a fused convolution layer.
- [BNNS.FusedQuantizationParameters](fusedquantizationparameters.md): Deprecated. A structure that contains the parameters for a fused quantization layer.
- [BNNS.FusedFullyConnectedParameters](fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
- [BNNS.FusedNormalizationParameters](fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.
