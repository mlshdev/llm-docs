> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedunaryarithmeticparameters](https://developer.apple.com/documentation/accelerate/bnns/fusedunaryarithmeticparameters)

# BNNS.FusedUnaryArithmeticParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A structure that contains the parameters for a fused unary arithmetic layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct FusedUnaryArithmeticParameters
```

## Topics

### Creating a Fused Arithmetic Parameters Structure

- [init(inputDescriptorType:outputDescriptorType:function:)](fusedunaryarithmeticparameters/init%28inputdescriptortype_outputdescriptortype_function_%29.md): Deprecated. Returns a new fused unary arithmetic parameters structure.

### Inspecting the Properties of a Fused Arithmetic Parameters Structure

- [inputDescriptorType](fusedunaryarithmeticparameters/inputdescriptortype.md): Deprecated. The descriptor type of the input.
- [outputDescriptorType](fusedunaryarithmeticparameters/outputdescriptortype.md): Deprecated. The descriptor type of the output.
- [function](fusedunaryarithmeticparameters/function.md): Deprecated. The arithmetic function.

## Relationships

### Conforms To

- [FusableLayerParameters](../fusablelayerparameters.md)

## See Also

### Specifying a Layer Parameter

- [BNNS.FusedBinaryArithmeticParameters](fusedbinaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused binary arithmetic layer.
- [BNNS.FusedTernaryArithmeticParameters](fusedternaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused ternary arithmetic layer.
- [BNNS.FusedConvolutionParameters](fusedconvolutionparameters.md): Deprecated. A structure that contains the parameters for a fused convolution layer.
- [BNNS.FusedQuantizationParameters](fusedquantizationparameters.md): Deprecated. A structure that contains the parameters for a fused quantization layer.
- [BNNS.FusedDequantizationParameters](fuseddequantizationparameters.md): Deprecated. A structure that contains the parameters for a fused dequantization layer.
- [BNNS.FusedFullyConnectedParameters](fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
- [BNNS.FusedNormalizationParameters](fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.
