> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticbinary](https://developer.apple.com/documentation/accelerate/bnnsarithmeticbinary)

# BNNSArithmeticBinary (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the inputs and output of an arithmetic operation with two inputs.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSArithmeticBinary
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticUnary](bnnsarithmeticunary.md) structure to pass the descriptions and types of the inputs and output of a binary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise sums of two vectors:

```swift
let inputOne: [Float] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
let inputTwo: [Float] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let count = inputOne.count
var outputs = [Float](repeating: 0,
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

var fields = BNNSArithmeticBinary(in1: descriptor, in1_type: BNNSSample,
                                  in2: descriptor, in2_type: BNNSConstant,
                                  out: descriptor, out_type: BNNSSample)

let function = BNNSArithmeticAdd

withUnsafeMutableBytes(of: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: function,
                                                        arithmetic_function_fields: fieldsPtr.baseAddress!,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Binary BNNSFilterCreateLayerArithmetic returned nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    inputOne.withUnsafeBytes { in1Ptr in
        inputTwo.withUnsafeBytes { in2Ptr in
            
            var input = [in1Ptr.baseAddress!, in2Ptr.baseAddress!]
            
            let error = BNNSArithmeticFilterApplyBatch(arithmeticLayer,
                                                       1,
                                                       2,
                                                       &input,
                                                       [inputOne.count, inputTwo.count],
                                                       &outputs,
                                                       outputs.count)
            
            print("BNNSArithmeticFilterApplyBatch: error", error)
        }
    }
}

// Prints "[11.0, 22.0, 33.0, 44.0, 55.0, 66.0, 77.0, 88.0, 99.0, 110.0]"
print("Binary Arithmetic: outputs", outputs)
```

## Topics

### Creating an Arithmetic Structure

- [init(in1:in1_type:in2:in2_type:out:out_type:)](bnnsarithmeticbinary/init%28in1_in1_type_in2_in2_type_out_out_type_%29.md): Deprecated. Returns a new arithmetic structure that takes two inputs from the specified parameters.
- [init()](bnnsarithmeticbinary/init%28%29.md): Deprecated. Returns a new arithmetic structure that takes two inputs.

### Inspecting the Properties of an Arithmetic Structure

- [in1](bnnsarithmeticbinary/in1.md): Deprecated. The descriptor of the first input.
- [in1_type](bnnsarithmeticbinary/in1_type.md): Deprecated. The descriptor type of the first input.
- [in2](bnnsarithmeticbinary/in2.md): Deprecated. The descriptor of the second input.
- [in2_type](bnnsarithmeticbinary/in2_type.md): Deprecated. The descriptor type of the second input.
- [out](bnnsarithmeticbinary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticbinary/out_type.md): Deprecated. The descriptor type of the output.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

# BNNSArithmeticBinary (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the inputs and output of an arithmetic operation with two inputs.

## Declaration

```objectivec
typedef struct { ... } BNNSArithmeticBinary;
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticUnary](bnnsarithmeticunary.md) structure to pass the descriptions and types of the inputs and output of a binary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise sums of two vectors:

```swift
let inputOne: [Float] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
let inputTwo: [Float] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let count = inputOne.count
var outputs = [Float](repeating: 0,
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

var fields = BNNSArithmeticBinary(in1: descriptor, in1_type: BNNSSample,
                                  in2: descriptor, in2_type: BNNSConstant,
                                  out: descriptor, out_type: BNNSSample)

let function = BNNSArithmeticAdd

withUnsafeMutableBytes(of: &fields) { fieldsPtr in
    
    var layerParameters = BNNSLayerParametersArithmetic(arithmetic_function: function,
                                                        arithmetic_function_fields: fieldsPtr.baseAddress!,
                                                        activation: .identity)
    
    guard let arithmeticLayer = BNNSFilterCreateLayerArithmetic(&layerParameters, nil) else {
        print("Binary BNNSFilterCreateLayerArithmetic returned nil")
        return
    }
    defer {
        BNNSFilterDestroy(arithmeticLayer)
    }
    
    inputOne.withUnsafeBytes { in1Ptr in
        inputTwo.withUnsafeBytes { in2Ptr in
            
            var input = [in1Ptr.baseAddress!, in2Ptr.baseAddress!]
            
            let error = BNNSArithmeticFilterApplyBatch(arithmeticLayer,
                                                       1,
                                                       2,
                                                       &input,
                                                       [inputOne.count, inputTwo.count],
                                                       &outputs,
                                                       outputs.count)
            
            print("BNNSArithmeticFilterApplyBatch: error", error)
        }
    }
}

// Prints "[11.0, 22.0, 33.0, 44.0, 55.0, 66.0, 77.0, 88.0, 99.0, 110.0]"
print("Binary Arithmetic: outputs", outputs)
```

## Topics

### Inspecting the Properties of an Arithmetic Structure

- [in1](bnnsarithmeticbinary/in1.md): Deprecated. The descriptor of the first input.
- [in1_type](bnnsarithmeticbinary/in1_type.md): Deprecated. The descriptor type of the first input.
- [in2](bnnsarithmeticbinary/in2.md): Deprecated. The descriptor of the second input.
- [in2_type](bnnsarithmeticbinary/in2_type.md): Deprecated. The descriptor type of the second input.
- [out](bnnsarithmeticbinary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticbinary/out_type.md): Deprecated. The descriptor type of the output.

## See Also

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
