> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticunary](https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary)

# BNNSArithmeticUnary (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the input and output of an arithmetic operation with a single input.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSArithmeticUnary
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticUnary](bnnsarithmeticunary.md) structure to pass the descriptions and types of the input and output of a unary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise square roots of a vector:

```swift
let input: [Float] = [4, 16, 9, 25, 100]
let count = input.count
var output = [Float](repeating: .nan,
                     count: count)

let descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (count, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: nil,
                                       data_type: .float,
                                       table_data: nil,
                                       table_data_type: .float,
                                       data_scale: 1,
                                       data_bias: 0)

var fields = BNNSArithmeticUnary(in: descriptor,
                                 in_type: BNNSSample,
                                 out: descriptor,
                                 out_type: BNNSSample)

withUnsafeMutablePointer(to: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: BNNSArithmeticSquareRoot,
                                                        arithmetic_function_fields: fieldsPtr,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Unary BNNSFilterCreateLayerArithmetic returns nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    input.withUnsafeBytes { inPtr in
        var rawPtr = inPtr.baseAddress!
        
        BNNSArithmeticFilterApplyBatch(arithmeticLayer, 1, 1,
                                       &rawPtr,
                                       [count],
                                       &output,
                                       count)
    }
}

// Prints "[2.0, 4.0, 3.0, 5.0, 10.0]"
print("Unary Arithmetic: outputs", output)
```

## Topics

### Creating an Arithmetic Structure

- [init(in:in_type:out:out_type:)](bnnsarithmeticunary/init%28in_in_type_out_out_type_%29.md): Deprecated. Returns a new arithmetic structure that takes a single input from the specified parameters.
- [init()](bnnsarithmeticunary/init%28%29.md): Deprecated. Returns a new arithmetic structure that takes a single input.

### Inspecting the Properties of an Arithmetic Structure

- [in](bnnsarithmeticunary/in.md): Deprecated. The descriptor of the input.
- [in_type](bnnsarithmeticunary/in_type.md): Deprecated. The descriptor type of the input.
- [out](bnnsarithmeticunary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticunary/out_type.md): Deprecated. The descriptor type of the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

# BNNSArithmeticUnary (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the input and output of an arithmetic operation with a single input.

## Declaration

```objectivec
typedef struct { ... } BNNSArithmeticUnary;
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticUnary](bnnsarithmeticunary.md) structure to pass the descriptions and types of the input and output of a unary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise square roots of a vector:

```swift
let input: [Float] = [4, 16, 9, 25, 100]
let count = input.count
var output = [Float](repeating: .nan,
                     count: count)

let descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (count, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: nil,
                                       data_type: .float,
                                       table_data: nil,
                                       table_data_type: .float,
                                       data_scale: 1,
                                       data_bias: 0)

var fields = BNNSArithmeticUnary(in: descriptor,
                                 in_type: BNNSSample,
                                 out: descriptor,
                                 out_type: BNNSSample)

withUnsafeMutablePointer(to: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: BNNSArithmeticSquareRoot,
                                                        arithmetic_function_fields: fieldsPtr,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Unary BNNSFilterCreateLayerArithmetic returns nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    input.withUnsafeBytes { inPtr in
        var rawPtr = inPtr.baseAddress!
        
        BNNSArithmeticFilterApplyBatch(arithmeticLayer, 1, 1,
                                       &rawPtr,
                                       [count],
                                       &output,
                                       count)
    }
}

// Prints "[2.0, 4.0, 3.0, 5.0, 10.0]"
print("Unary Arithmetic: outputs", output)
```

## Topics

### Inspecting the Properties of an Arithmetic Structure

- [in](bnnsarithmeticunary/in.md): Deprecated. The descriptor of the input.
- [in_type](bnnsarithmeticunary/in_type.md): Deprecated. The descriptor type of the input.
- [out](bnnsarithmeticunary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticunary/out_type.md): Deprecated. The descriptor type of the output.

## See Also

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
