> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryfullyconnected/init(device:convolutiondata:outputbiasterms:outputscaleterms:inputbiasterms:inputscaleterms:type:flags:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryfullyconnected/init(device:convolutiondata:outputbiasterms:outputscaleterms:inputbiasterms:inputscaleterms:type:flags:))

# init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a fully connected convolution layer with binary weights.

## Declaration

```swift
convenience init(device: any MTLDevice, convolutionData: any MPSCNNConvolutionDataSource, outputBiasTerms: UnsafePointer<Float>?, outputScaleTerms: UnsafePointer<Float>?, inputBiasTerms: UnsafePointer<Float>?, inputScaleTerms: UnsafePointer<Float>?, type: MPSCNNBinaryConvolutionType, flags: MPSCNNBinaryConvolutionFlags)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a fully connected convolution layer with binary weights.
- [init(device:convolutionData:scaleValue:type:flags:)](init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

# initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a fully connected convolution layer with binary weights.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device convolutionData:(id<MPSCNNConvolutionDataSource>) convolutionData outputBiasTerms:(const float *) outputBiasTerms outputScaleTerms:(const float *) outputScaleTerms inputBiasTerms:(const float *) inputBiasTerms inputScaleTerms:(const float *) inputScaleTerms type:(MPSCNNBinaryConvolutionType) type flags:(MPSCNNBinaryConvolutionFlags) flags;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a fully connected convolution layer with binary weights.
- [initWithDevice:convolutionData:scaleValue:type:flags:](init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](../mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](../mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.
