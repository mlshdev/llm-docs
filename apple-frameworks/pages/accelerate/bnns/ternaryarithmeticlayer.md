> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/ternaryarithmeticlayer](https://developer.apple.com/documentation/accelerate/bnns/ternaryarithmeticlayer)

# BNNS.TernaryArithmeticLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A layer object that wraps a ternary arithmetic filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class TernaryArithmeticLayer
```

## Topics

### Creating a Ternary Arithmetic Layer

- [init(inputA:inputADescriptorType:inputB:inputBDescriptorType:inputC:inputCDescriptorType:output:outputDescriptorType:function:activation:filterParameters:)](ternaryarithmeticlayer/init%28inputa_inputadescriptortype_inputb_inputbdescriptortype_inputc_inputcdescriptortype_output_outputdescriptortype_function_activation_filterparameters_%29.md): Deprecated. Returns a new ternary arithmetic layer.

### Specifying a Ternary Arithmetic Function

- [BNNS.ArithmeticTernaryFunction](arithmeticternaryfunction.md): Deprecated. Constants that describe ternary arithmetic functions.

### Specifying a Descriptor Type

- [BNNS.DescriptorType](descriptortype.md): Deprecated. Constants that describe the input and output types of an arithmetic operation.

### Applying a Ternary Arithmetic Layer

- [apply(batchSize:inputA:inputB:inputC:output:)](ternaryarithmeticlayer/apply%28batchsize_inputa_inputb_inputc_output_%29.md): Deprecated. Applies the layer to a set of input array descriptors, writing the result to a set of output array descriptors.
- [applyBackward(batchSize:inputA:inputB:inputC:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingInputCGradient:)](ternaryarithmeticlayer/applybackward%28batchsize_inputa_inputb_inputc_output_outputgradient_generatinginputagradient_generatinginputbgradient_generatinginputcgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](../bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](../bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](../bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](../bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](../bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](../bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](../bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](../bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
