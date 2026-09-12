> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnfullyconnected/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnfullyconnected/init(coder:device:))

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a fully connected convolution layer.

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Initializers

- [init(device:weights:)](init%28device_weights_%29.md): Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [init(device:convolutionDescriptor:kernelWeights:biasTerms:flags:)](init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a fully connected convolution layer.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Initializers

- [initWithDevice:weights:](init%28device_weights_%29.md): Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
- [initWithDevice:convolutionDescriptor:kernelWeights:biasTerms:flags:](init%28device_convolutiondescriptor_kernelweights_biasterms_flags_%29.md): Deprecated. Initializes a fully connected convolution layer.
- [MPSCNNConvolutionDescriptor](../mpscnnconvolutiondescriptor.md): A description of the attributes of a convolution kernel.
- [MPSCNNConvolutionFlags](../mpscnnconvolutionflags.md): Options used to control how kernel weights are stored and used in the CNN kernels
