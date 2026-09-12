> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutionflags](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutionflags)

# MPSCNNConvolutionFlags (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options used to control how kernel weights are stored and used in the CNN kernels

## Declaration

```swift
enum MPSCNNConvolutionFlags
```

## Topics

### Enumeration Cases

- [MPSCNNConvolutionFlags.none](mpscnnconvolutionflags/none.md): Deprecated.

### Initializers

- [init(rawValue:)](mpscnnconvolutionflags/init%28rawvalue_%29.md)

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

- [init(coder:device:)](mpscnnconvolution/init%28coder_device_%29.md)
- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [init(device:weights:)](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# MPSCNNConvolutionFlags (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options used to control how kernel weights are stored and used in the CNN kernels

## Declaration

```objectivec
enum MPSCNNConvolutionFlags : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSCNNConvolutionFlagsNone](mpscnnconvolutionflags/none.md): Deprecated.

## See Also

### Initializers

- [initWithCoder:device:](mpscnnconvolution/init%28coder_device_%29.md)
- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](mpscnnconvolution/init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [initWithDevice:weights:](mpscnnconvolution/init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
