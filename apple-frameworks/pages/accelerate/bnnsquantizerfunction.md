> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsquantizerfunction](https://developer.apple.com/documentation/accelerate/bnnsquantizerfunction)

# BNNSQuantizerFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe quantization functions.

## Declaration

```swift
struct BNNSQuantizerFunction
```

## Topics

### Quantization Functions

- [init(\_:)](bnnsquantizerfunction/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](bnnsquantizerfunction/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [rawValue](bnnsquantizerfunction/rawvalue.md): The corresponding value of the raw type.
- [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md): A constant that specifes conversion to a higher precision.
- [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md): A constant that specifes conversion to a lower precision.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Quantization functions

- [quantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/quantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Quantizes the input tensor and writes the result to the output tensor.
- [dequantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/dequantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Dequantizes the input tensor and writes the result to the output tensor.
- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.
- [BNNSDirectApplyQuantizer(\_:\_:\_:\_:\_:)](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.

# BNNSQuantizerFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe quantization functions.

## Declaration

```objectivec
typedef enum { ... } BNNSQuantizerFunction;
```

## Topics

### Quantization Functions

- [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md): A constant that specifes conversion to a higher precision.
- [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md): A constant that specifes conversion to a lower precision.

## See Also

### Quantization functions

- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.
- [BNNSDirectApplyQuantizer](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.
