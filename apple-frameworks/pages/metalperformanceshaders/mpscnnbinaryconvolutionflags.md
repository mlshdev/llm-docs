> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryconvolutionflags](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryconvolutionflags)

# MPSCNNBinaryConvolutionFlags (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options used to control binary convolution kernels.

## Declaration

```swift
enum MPSCNNBinaryConvolutionFlags
```

## Topics

### Enumeration Cases

- [MPSCNNBinaryConvolutionFlags.none](mpscnnbinaryconvolutionflags/none.md)
- [MPSCNNBinaryConvolutionFlags.useBetaScaling](mpscnnbinaryconvolutionflags/usebetascaling.md)

### Initializers

- [init(rawValue:)](mpscnnbinaryconvolutionflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Initializers

- [init(coder:device:)](mpscnnbinaryconvolution/init%28coder_device_%29.md)
- [init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](mpscnnbinaryconvolution/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [init(device:convolutionData:scaleValue:type:flags:)](mpscnnbinaryconvolution/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.

# MPSCNNBinaryConvolutionFlags (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options used to control binary convolution kernels.

## Declaration

```objectivec
enum MPSCNNBinaryConvolutionFlags : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSCNNBinaryConvolutionFlagsNone](mpscnnbinaryconvolutionflags/none.md)
- [MPSCNNBinaryConvolutionFlagsUseBetaScaling](mpscnnbinaryconvolutionflags/usebetascaling.md)

## See Also

### Initializers

- [initWithCoder:device:](mpscnnbinaryconvolution/init%28coder_device_%29.md)
- [initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryconvolution/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a binary convolution kernel.
- [initWithDevice:convolutionData:scaleValue:type:flags:](mpscnnbinaryconvolution/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a binary convolution kernel.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
