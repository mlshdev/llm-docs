> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryconvolution/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryconvolution/init(coder:device:))

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Initializers

- [init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [init(device:convolutionData:scaleValue:type:flags:)](init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Initializers

- [initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [initWithDevice:convolutionData:scaleValue:type:flags:](init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
