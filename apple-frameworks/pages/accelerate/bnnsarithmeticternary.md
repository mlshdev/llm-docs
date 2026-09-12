> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticternary](https://developer.apple.com/documentation/accelerate/bnnsarithmeticternary)

# BNNSArithmeticTernary (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the inputs and output of an arithmetic operation with three inputs.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSArithmeticTernary
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticTernary](bnnsarithmeticternary.md) structure to pass the descriptions and types of the inputs and output of a binary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise multiply-add of two vectors:

```swift
static func ternaryArithmetic() {
    
    let aData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = aData.initialize(from: [10])
    let aDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: aData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let bData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = bData.initialize(from: [20])
    let bDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: bData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let cData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = cData.initialize(from: [100])
    let cDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: cData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let outputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    let outputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                 layout: BNNSDataLayoutVector,
                                                 size: (1, 0, 0, 0, 0, 0, 0, 0),
                                                 stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                 data: outputData.baseAddress!,
                                                 data_type: BNNSDataType.float,
                                                 table_data: nil,
                                                 table_data_type: BNNSDataType.float,
                                                 data_scale: 1, data_bias: 0)
    
    let fields = BNNSArithmeticTernary(in1: aDescriptor, in1_type: BNNSSample,
                                       in2: bDescriptor, in2_type: BNNSSample,
                                       in3: cDescriptor, in3_type: BNNSSample,
                                       out: outputDescriptor, out_type: BNNSSample)
    
    let arithmeticLayer: BNNSFilter? = withUnsafePointer(to: fields) { fieldsPtr in
        
        var layerParameters = BNNSLayerParametersArithmetic(
            arithmetic_function: BNNSArithmeticMultiplyAdd,
            arithmetic_function_fields: UnsafeMutableRawPointer(mutating: fieldsPtr),
            activation: .identity)
        
        return BNNSFilterCreateLayerArithmetic(&layerParameters, nil)
    }
    
    var rawInputPointer = [ UnsafeRawPointer(aDescriptor.data!),
                            UnsafeRawPointer(bDescriptor.data!),
                            UnsafeRawPointer(cDescriptor.data!)]
    
    BNNSArithmeticFilterApplyBatch(arithmeticLayer,
                                   1,
                                   3,
                                   &rawInputPointer,
                                   [1, 1, 1],
                                   outputDescriptor.data!,
                                   1)
    
    // Prints `10 * 20 + 100 (300)`
    print(Array(outputData))
    
    aData.deallocate()
    bData.deallocate()
    cData.deallocate()
    outputData.deallocate()
}
```

## Topics

### Creating an Arithmetic Structure

- [init(in1:in1_type:in2:in2_type:in3:in3_type:out:out_type:)](bnnsarithmeticternary/init%28in1_in1_type_in2_in2_type_in3_in3_type_out_out_type_%29.md): Deprecated. Returns a new arithmetic structure that takes three inputs from the specified parameters.
- [init()](bnnsarithmeticternary/init%28%29.md): Deprecated. Returns a new arithmetic structure that takes three inputs.

### Inspecting the Properties of an Arithmetic Structure

- [in1](bnnsarithmeticternary/in1.md): Deprecated. The descriptor of the first input.
- [in1_type](bnnsarithmeticternary/in1_type.md): Deprecated. The descriptor type of the first input.
- [in2](bnnsarithmeticternary/in2.md): Deprecated. The descriptor of the second input.
- [in2_type](bnnsarithmeticternary/in2_type.md): Deprecated. The descriptor type of the second input.
- [in3](bnnsarithmeticternary/in3.md): Deprecated. The descriptor of the third input.
- [in3_type](bnnsarithmeticternary/in3_type.md): Deprecated. The descriptor type of the third input.
- [out](bnnsarithmeticternary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticternary/out_type.md): Deprecated. The descriptor type of the output.

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
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

# BNNSArithmeticTernary (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the inputs and output of an arithmetic operation with three inputs.

## Declaration

```objectivec
typedef struct { ... } BNNSArithmeticTernary;
```

<a id="overview"></a>

## Overview

Use a [BNNSArithmeticTernary](bnnsarithmeticternary.md) structure to pass the descriptions and types of the inputs and output of a binary arithmetic operation to [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md).

The following code shows how to calculate the element-wise multiply-add of two vectors:

```swift
static func ternaryArithmetic() {
    
    let aData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = aData.initialize(from: [10])
    let aDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: aData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let bData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = bData.initialize(from: [20])
    let bDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: bData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let cData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    _ = cData.initialize(from: [100])
    let cDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                            layout: BNNSDataLayoutVector,
                                            size: (1, 0, 0, 0, 0, 0, 0, 0),
                                            stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                            data: cData.baseAddress!,
                                            data_type: BNNSDataType.float,
                                            table_data: nil,
                                            table_data_type: BNNSDataType.float,
                                            data_scale: 1, data_bias: 0)
    
    let outputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 1)
    let outputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                 layout: BNNSDataLayoutVector,
                                                 size: (1, 0, 0, 0, 0, 0, 0, 0),
                                                 stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                 data: outputData.baseAddress!,
                                                 data_type: BNNSDataType.float,
                                                 table_data: nil,
                                                 table_data_type: BNNSDataType.float,
                                                 data_scale: 1, data_bias: 0)
    
    let fields = BNNSArithmeticTernary(in1: aDescriptor, in1_type: BNNSSample,
                                       in2: bDescriptor, in2_type: BNNSSample,
                                       in3: cDescriptor, in3_type: BNNSSample,
                                       out: outputDescriptor, out_type: BNNSSample)
    
    let arithmeticLayer: BNNSFilter? = withUnsafePointer(to: fields) { fieldsPtr in
        
        var layerParameters = BNNSLayerParametersArithmetic(
            arithmetic_function: BNNSArithmeticMultiplyAdd,
            arithmetic_function_fields: UnsafeMutableRawPointer(mutating: fieldsPtr),
            activation: .identity)
        
        return BNNSFilterCreateLayerArithmetic(&layerParameters, nil)
    }
    
    var rawInputPointer = [ UnsafeRawPointer(aDescriptor.data!),
                            UnsafeRawPointer(bDescriptor.data!),
                            UnsafeRawPointer(cDescriptor.data!)]
    
    BNNSArithmeticFilterApplyBatch(arithmeticLayer,
                                   1,
                                   3,
                                   &rawInputPointer,
                                   [1, 1, 1],
                                   outputDescriptor.data!,
                                   1)
    
    // Prints `10 * 20 + 100 (300)`
    print(Array(outputData))
    
    aData.deallocate()
    bData.deallocate()
    cData.deallocate()
    outputData.deallocate()
}
```

## Topics

### Inspecting the Properties of an Arithmetic Structure

- [in1](bnnsarithmeticternary/in1.md): Deprecated. The descriptor of the first input.
- [in1_type](bnnsarithmeticternary/in1_type.md): Deprecated. The descriptor type of the first input.
- [in2](bnnsarithmeticternary/in2.md): Deprecated. The descriptor of the second input.
- [in2_type](bnnsarithmeticternary/in2_type.md): Deprecated. The descriptor type of the second input.
- [in3](bnnsarithmeticternary/in3.md): Deprecated. The descriptor of the third input.
- [in3_type](bnnsarithmeticternary/in3_type.md): Deprecated. The descriptor type of the third input.
- [out](bnnsarithmeticternary/out.md): Deprecated. The descriptor of the output.
- [out_type](bnnsarithmeticternary/out_type.md): Deprecated. The descriptor type of the output.

## See Also

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticFunction](bnnsarithmeticfunction.md): Constants that define arithmetic operations.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
