> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(kernelwidth:kernelheight:inputfeaturechannels:outputfeaturechannels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(kernelwidth:kernelheight:inputfeaturechannels:outputfeaturechannels:))

# init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(kernelWidth: Int, kernelHeight: Int, inputFeatureChannels: Int, outputFeatureChannels: Int)
```

## See Also

### Type Methods

- [init(coder:)](init%28coder_%29.md)
- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:)](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.

# cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) cnnConvolutionDescriptorWithKernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight inputFeatureChannels:(NSUInteger) inputFeatureChannels outputFeatureChannels:(NSUInteger) outputFeatureChannels;
```

## See Also

### Type Methods

- [initWithCoder:](init%28coder_%29.md)
- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_neuronfilter_%29.md): Deprecated. Creates a convolution descriptor with an optional neuron filter.
