> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondatasource](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondatasource)

# MPSCNNConvolutionDataSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol that provides convolution filter weights and bias terms.

## Declaration

```swift
protocol MPSCNNConvolutionDataSource : NSCopying, NSObjectProtocol
```

## Topics

### Instance Methods

- [biasTerms()](mpscnnconvolutiondatasource/biasterms%28%29.md)
- [dataType()](mpscnnconvolutiondatasource/datatype%28%29.md)
- [descriptor()](mpscnnconvolutiondatasource/descriptor%28%29.md)
- [label()](mpscnnconvolutiondatasource/label%28%29.md)
- [load()](mpscnnconvolutiondatasource/load%28%29.md)
- [lookupTableForUInt8Kernel()](mpscnnconvolutiondatasource/lookuptableforuint8kernel%28%29.md)
- [purge()](mpscnnconvolutiondatasource/purge%28%29.md)
- [rangesForUInt8Kernel()](mpscnnconvolutiondatasource/rangesforuint8kernel%28%29.md)
- [weights()](mpscnnconvolutiondatasource/weights%28%29.md)
- [copy(with:device:)](mpscnnconvolutiondatasource/copy%28with_device_%29.md)
- [kernelWeightsDataType()](mpscnnconvolutiondatasource/kernelweightsdatatype%28%29.md)
- [update(with:gradientState:sourceState:)](mpscnnconvolutiondatasource/update%28with_gradientstate_sourcestate_%29.md)
- [update(with:sourceState:)](mpscnnconvolutiondatasource/update%28with_sourcestate_%29.md)
- [weightsLayout()](mpscnnconvolutiondatasource/weightslayout%28%29.md)
- [weightsQuantizationType()](mpscnnconvolutiondatasource/weightsquantizationtype%28%29.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Initializers

- [init(coder:device:)](mpscnnbinaryconvolution/init%28coder_device_%29.md)
- [init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](mpscnnbinaryconvolution/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [init(device:convolutionData:scaleValue:type:flags:)](mpscnnbinaryconvolution/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

# MPSCNNConvolutionDataSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol that provides convolution filter weights and bias terms.

## Declaration

```objectivec
@protocol MPSCNNConvolutionDataSource <NSCopying, NSObject>
```

## Topics

### Instance Methods

- [biasTerms](mpscnnconvolutiondatasource/biasterms%28%29.md)
- [dataType](mpscnnconvolutiondatasource/datatype%28%29.md)
- [descriptor](mpscnnconvolutiondatasource/descriptor%28%29.md)
- [label](mpscnnconvolutiondatasource/label%28%29.md)
- [load](mpscnnconvolutiondatasource/load%28%29.md)
- [lookupTableForUInt8Kernel](mpscnnconvolutiondatasource/lookuptableforuint8kernel%28%29.md)
- [purge](mpscnnconvolutiondatasource/purge%28%29.md)
- [rangesForUInt8Kernel](mpscnnconvolutiondatasource/rangesforuint8kernel%28%29.md)
- [weights](mpscnnconvolutiondatasource/weights%28%29.md)
- [copyWithZone:device:](mpscnnconvolutiondatasource/copy%28with_device_%29.md)
- [kernelWeightsDataType](mpscnnconvolutiondatasource/kernelweightsdatatype%28%29.md)
- [updateWithCommandBuffer:gradientState:sourceState:](mpscnnconvolutiondatasource/update%28with_gradientstate_sourcestate_%29.md)
- [updateWithGradientState:sourceState:](mpscnnconvolutiondatasource/update%28with_sourcestate_%29.md)
- [weightsLayout](mpscnnconvolutiondatasource/weightslayout%28%29.md)
- [weightsQuantizationType](mpscnnconvolutiondatasource/weightsquantizationtype%28%29.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Initializers

- [initWithCoder:device:](mpscnnbinaryconvolution/init%28coder_device_%29.md)
- [initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryconvolution/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [initWithDevice:convolutionData:scaleValue:type:flags:](mpscnnbinaryconvolution/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
