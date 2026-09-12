> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:))

# BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSArithmeticFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ number_of_inputs: Int, _ in: UnsafeMutablePointer<UnsafeRawPointer>, _ in_stride: UnsafePointer<Int>, _ out: UnsafeMutableRawPointer, _ out_stride: Int) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `number_of_inputs`: The number of inputs to the arithmetic operation.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.

## See Also

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

# BNNSArithmeticFilterApplyBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSArithmeticFilterApplyBatch(BNNSFilter filter, size_t batch_size, size_t number_of_inputs, const void **in, const size_t *in_stride, void *out, size_t out_stride);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `number_of_inputs`: The number of inputs to the arithmetic operation.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.

## See Also

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
