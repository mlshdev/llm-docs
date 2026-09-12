> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersactivation](https://developer.apple.com/documentation/accelerate/bnnslayerparametersactivation)

# BNNSLayerParametersActivation (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A set of parameters that define an activation layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersActivation
```

<a id="overview"></a>

## Overview

Use an activation layer to perform type conversion. The following code shows how to convert 16-bit integer values to single-precision values:

```swift
let input: [Int16] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var output = [Float](repeating: 0, count: input.count)

input.withUnsafeBufferPointer { inputPtr in
    output.withUnsafeMutableBufferPointer { outputPtr in
        
        let inputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (input.count, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: UnsafeMutableRawPointer(mutating: inputPtr.baseAddress),
                                                    data_type: .int16,
                                                    table_data: nil,
                                                    table_data_type: .int16,
                                                    data_scale: 1,
                                                    data_bias: 0)
        
        let ouputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (input.count, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputPtr.baseAddress,
                                                    data_type: .float,
                                                    table_data: nil,
                                                    table_data_type: .float,
                                                    data_scale: 1,
                                                    data_bias: 0)
        
        var layerParameters = BNNSLayerParametersActivation(i_desc: inputDescriptor,
                                                                 o_desc: ouputDescriptor,
                                                                 activation: .identity,
                                                                 axis_flags: 0)
        
        BNNSDirectApplyActivationBatch(&layerParameters,
                                       nil,
                                       1,
                                       input.count,
                                       input.count)
    }
}

// Prints "[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]"
print(output)
```

## Topics

### Initializers

- [init()](bnnslayerparametersactivation/init%28%29.md): Deprecated. Returns a new activation layer parameters structure.
- [init(i_desc:o_desc:activation:axis_flags:)](bnnslayerparametersactivation/init%28i_desc_o_desc_activation_axis_flags_%29.md): Deprecated. Returns a new activation layer parameters structure from the supplied descriptors, activation function, and axis flags.

### Instance Properties

- [i_desc](bnnslayerparametersactivation/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersactivation/o_desc.md): Deprecated. The descriptor of the output.
- [activation](bnnslayerparametersactivation/activation.md): Deprecated. The activation function that the layer applies to the output.
- [axis_flags](bnnslayerparametersactivation/axis_flags.md): Deprecated. Flags that indicate axes on which to apply certain activation functions.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSLayerParametersActivation (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that define an activation layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersActivation;
```

<a id="overview"></a>

## Overview

Use an activation layer to perform type conversion. The following code shows how to convert 16-bit integer values to single-precision values:

```swift
let input: [Int16] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var output = [Float](repeating: 0, count: input.count)

input.withUnsafeBufferPointer { inputPtr in
    output.withUnsafeMutableBufferPointer { outputPtr in
        
        let inputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (input.count, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: UnsafeMutableRawPointer(mutating: inputPtr.baseAddress),
                                                    data_type: .int16,
                                                    table_data: nil,
                                                    table_data_type: .int16,
                                                    data_scale: 1,
                                                    data_bias: 0)
        
        let ouputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (input.count, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputPtr.baseAddress,
                                                    data_type: .float,
                                                    table_data: nil,
                                                    table_data_type: .float,
                                                    data_scale: 1,
                                                    data_bias: 0)
        
        var layerParameters = BNNSLayerParametersActivation(i_desc: inputDescriptor,
                                                                 o_desc: ouputDescriptor,
                                                                 activation: .identity,
                                                                 axis_flags: 0)
        
        BNNSDirectApplyActivationBatch(&layerParameters,
                                       nil,
                                       1,
                                       input.count,
                                       input.count)
    }
}

// Prints "[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]"
print(output)
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersactivation/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersactivation/o_desc.md): Deprecated. The descriptor of the output.
- [activation](bnnslayerparametersactivation/activation.md): Deprecated. The activation function that the layer applies to the output.
- [axis_flags](bnnslayerparametersactivation/axis_flags.md): Deprecated. Flags that indicate axes on which to apply certain activation functions.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
