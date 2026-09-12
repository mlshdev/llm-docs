> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/init(coder:device:))

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

- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [init(device:weights:)](init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

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

- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a convolution kernel.
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
- [initWithDevice:weights:](init%28device_weights_%29.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
