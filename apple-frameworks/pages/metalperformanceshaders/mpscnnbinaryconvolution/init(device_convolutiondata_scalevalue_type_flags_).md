> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryconvolution/init(device:convolutiondata:scalevalue:type:flags:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryconvolution/init(device:convolutiondata:scalevalue:type:flags:))

# init(device:convolutionData:scaleValue:type:flags:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a binary convolution kernel.

## Declaration

```swift
convenience init(device: any MTLDevice, convolutionData: any MPSCNNConvolutionDataSource, scaleValue: Float, type: MPSCNNBinaryConvolutionType, flags: MPSCNNBinaryConvolutionFlags)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md)
- [init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

# initWithDevice:convolutionData:scaleValue:type:flags: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a binary convolution kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device convolutionData:(id<MPSCNNConvolutionDataSource>) convolutionData scaleValue:(float) scaleValue type:(MPSCNNBinaryConvolutionType) type flags:(MPSCNNBinaryConvolutionFlags) flags;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md)
- [initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
