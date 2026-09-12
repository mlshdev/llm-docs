> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(coder:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(coder:))

# init(coder:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## See Also

### Type Methods

- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:)](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)
- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:)](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.

# initWithCoder: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## See Also

### Type Methods

- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)
- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.
