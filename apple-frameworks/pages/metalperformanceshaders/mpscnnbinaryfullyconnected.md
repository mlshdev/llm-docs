> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinaryfullyconnected](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinaryfullyconnected)

# MPSCNNBinaryFullyConnected (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A fully connected convolution layer with binary weights and optionally binarized input image.

## Declaration

```swift
class MPSCNNBinaryFullyConnected
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnbinaryfullyconnected/init%28coder_device_%29.md): Initializes a fully connected convolution layer with binary weights.
- [init(device:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:)](mpscnnbinaryfullyconnected/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [init(device:convolutionData:scaleValue:type:flags:)](mpscnnbinaryfullyconnected/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

## Relationships

### Inherits From

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Fully Connected Layers

- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.

# MPSCNNBinaryFullyConnected (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A fully connected convolution layer with binary weights and optionally binarized input image.

## Declaration

```objectivec
@interface MPSCNNBinaryFullyConnected : MPSCNNBinaryConvolution
```

## Topics

### Initializers

- [initWithCoder:device:](mpscnnbinaryfullyconnected/init%28coder_device_%29.md): Initializes a fully connected convolution layer with binary weights.
- [initWithDevice:convolutionData:outputBiasTerms:outputScaleTerms:inputBiasTerms:inputScaleTerms:type:flags:](mpscnnbinaryfullyconnected/init%28device_convolutiondata_outputbiasterms_outputscaleterms_inputbiasterms_inputscaleterms_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [initWithDevice:convolutionData:scaleValue:type:flags:](mpscnnbinaryfullyconnected/init%28device_convolutiondata_scalevalue_type_flags_%29.md): Initializes a fully connected convolution layer with binary weights.
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [MPSCNNBinaryConvolutionType](mpscnnbinaryconvolutiontype.md): Options that defines what operations are used to perform binary convolution.
- [MPSCNNBinaryConvolutionFlags](mpscnnbinaryconvolutionflags.md): Options used to control binary convolution kernels.

## Relationships

### Inherits From

- [MPSCNNBinaryConvolution](mpscnnbinaryconvolution.md)

## See Also

### Fully Connected Layers

- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.
- [MPSCNNFullyConnectedGradient](mpscnnfullyconnectedgradient.md): A gradient fully connected convolution layer.
