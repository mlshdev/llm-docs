> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedfullyconnectedparameters](https://developer.apple.com/documentation/accelerate/bnns/fusedfullyconnectedparameters)

# BNNS.FusedFullyConnectedParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A structure that contains the parameters for a fused fully connected layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct FusedFullyConnectedParameters
```

## Topics

### Creating a Fused Fully Connected Parameters Structure

- [init(weights:bias:)](fusedfullyconnectedparameters/init%28weights_bias_%29.md): Deprecated. Returns a new fused dequantization parameters structure.

### Inspecting the Properties of a Fused Fully Connected Parameters Structure

- [weights](fusedfullyconnectedparameters/weights.md): Deprecated. The descriptor of the weights.
- [bias](fusedfullyconnectedparameters/bias.md): Deprecated. The descriptor of the bias.

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
- [BNNS.FusedDequantizationParameters](fuseddequantizationparameters.md): Deprecated. A structure that contains the parameters for a fused dequantization layer.
- [BNNS.FusedNormalizationParameters](fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.
