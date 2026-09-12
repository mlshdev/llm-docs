> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusednormalizationparameters](https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters)

# BNNS.FusedNormalizationParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A structure that contains the parameters for a fused normalization layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct FusedNormalizationParameters
```

## Topics

### Creating a Fused Normalization Parameters Structure

- [init(type:beta:gamma:momentum:epsilon:activation:)](fusednormalizationparameters/init%28type_beta_gamma_momentum_epsilon_activation_%29.md): Deprecated. Returns a new fused normalization parameters structure.

### Inspecting the Properties of a Fused Normalization Parameters Structure

- [type](fusednormalizationparameters/type.md): Deprecated. An enumeration that specifies the normalization type.
- [beta](fusednormalizationparameters/beta.md): Deprecated. The descriptor of the beta.
- [gamma](fusednormalizationparameters/gamma.md): Deprecated. The descriptor of the gamma.
- [momentum](fusednormalizationparameters/momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](fusednormalizationparameters/epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](fusednormalizationparameters/activation.md): Deprecated. The activation function that the layer applies to the output.

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
- [BNNS.FusedFullyConnectedParameters](fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
