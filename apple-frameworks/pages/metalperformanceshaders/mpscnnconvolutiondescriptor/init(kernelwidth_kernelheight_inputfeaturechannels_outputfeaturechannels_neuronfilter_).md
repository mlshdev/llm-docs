> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(kernelwidth:kernelheight:inputfeaturechannels:outputfeaturechannels:neuronfilter:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondescriptor/init(kernelwidth:kernelheight:inputfeaturechannels:outputfeaturechannels:neuronfilter:))

# init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a convolution descriptor with an optional neuron filter.

## Declaration

```swift
convenience init(kernelWidth: Int, kernelHeight: Int, inputFeatureChannels: Int, outputFeatureChannels: Int, neuronFilter: MPSCNNNeuron?)
```

## Parameters

- `kernelWidth`: The width of the kernel window.

  This value must be `>0`. Larger values will take a longer time to process.
- `kernelHeight`: The height of the kernel window.

  The value must be `>0`. Larger values will take a longer time to process.
- `inputFeatureChannels`: The number of feature channels in the input image.

  This value must be `>=1`.
- `outputFeatureChannels`: The number of feature channels in the output image.

  This value must be `>=1`.
- `neuronFilter`: An optional neuron filter that can be applied to the output of the convolution operation.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNConvolution](../mpscnnconvolution.md) object or `nil`, if failure.

## See Also

### Type Methods

- [init(coder:)](init%28coder_%29.md)
- [init(kernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:)](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)

# cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:neuronFilter: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · macOS 10.13+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a convolution descriptor with an optional neuron filter.

## Declaration

```objectivec
+ (instancetype) cnnConvolutionDescriptorWithKernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight inputFeatureChannels:(NSUInteger) inputFeatureChannels outputFeatureChannels:(NSUInteger) outputFeatureChannels neuronFilter:(const MPSCNNNeuron *) neuronFilter;
```

## Parameters

- `kernelWidth`: The width of the kernel window.

  This value must be `>0`. Larger values will take a longer time to process.
- `kernelHeight`: The height of the kernel window.

  The value must be `>0`. Larger values will take a longer time to process.
- `inputFeatureChannels`: The number of feature channels in the input image.

  This value must be `>=1`.
- `outputFeatureChannels`: The number of feature channels in the output image.

  This value must be `>=1`.
- `neuronFilter`: An optional neuron filter that can be applied to the output of the convolution operation.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNConvolution](../mpscnnconvolution.md) object or `nil`, if failure.

## See Also

### Type Methods

- [initWithCoder:](init%28coder_%29.md)
- [cnnConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannels:outputFeatureChannels:](init%28kernelwidth_kernelheight_inputfeaturechannels_outputfeaturechannels_%29.md)
