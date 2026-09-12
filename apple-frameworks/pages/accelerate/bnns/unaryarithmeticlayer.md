> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/unaryarithmeticlayer](https://developer.apple.com/documentation/accelerate/bnns/unaryarithmeticlayer)

# BNNS.UnaryArithmeticLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a unary arithmetic filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class UnaryArithmeticLayer
```

## Topics

### Creating a Unary Arithmetic Layer

- [init(input:inputDescriptorType:output:outputDescriptorType:function:activation:filterParameters:)](unaryarithmeticlayer/init%28input_inputdescriptortype_output_outputdescriptortype_function_activation_filterparameters_%29.md): Deprecated. Returns a new unary arithmetic layer.

### Specifying a Unary Arithmetic Function

- [BNNS.ArithmeticUnaryFunction](arithmeticunaryfunction.md): Deprecated. Constants that describe unary arithmetic functions.

### Specifying a Descriptor Type

- [BNNS.DescriptorType](descriptortype.md): Deprecated. Constants that describe the input and output types of an arithmetic operation.

### Applying a Unary Arithmetic Layer

- [apply(batchSize:input:output:)](unaryarithmeticlayer/apply%28batchsize_input_output_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:)](unaryarithmeticlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Arithmetic layers

- [BNNS.BinaryArithmeticLayer](binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](../bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](../bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](../bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](../bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](../bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](../bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](../bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](../bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
