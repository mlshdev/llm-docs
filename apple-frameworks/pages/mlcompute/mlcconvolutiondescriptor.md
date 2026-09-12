> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor)

# MLCConvolutionDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a convolution or fully connected layer.

## Declaration

```swift
class MLCConvolutionDescriptor
```

## Topics

### Creating Convolution Descriptors

- [init(type:kernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:)](mlcconvolutiondescriptor/init%28type_kernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_%29.md): Deprecated. Creates a descriptor for the type, sizes, number of feature channels, group count, strides, dilation rates, and padding policy you specify.
- [init(transposeWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:)](mlcconvolutiondescriptor/init%28transposewithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_%29.md): Deprecated. Creates a descriptor for convolution transpose with the kernel sizes and number of feature channels you specify.
- [init(depthwiseWithKernelWidth:kernelHeight:inputFeatureChannelCount:channelMultiplier:)](mlcconvolutiondescriptor/init%28depthwisewithkernelwidth_kernelheight_inputfeaturechannelcount_channelmultiplier_%29.md): Deprecated. Creates a descriptor for depthwise convolution with the kernel sizes, number of input feature channels, and channel multiplier you specify.
- [MLCConvolutionType](mlcconvolutiontype.md): Deprecated. The convolution type specified for a convolution layer.

### Inspecting Convolution Descriptors

- [convolutionType](mlcconvolutiondescriptor/convolutiontype.md): Deprecated. The type of convolution.
- [kernelSizes](mlcconvolutiondescriptor/kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [inputFeatureChannelCount](mlcconvolutiondescriptor/inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](mlcconvolutiondescriptor/outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strides](mlcconvolutiondescriptor/strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](mlcconvolutiondescriptor/dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [groupCount](mlcconvolutiondescriptor/groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](mlcconvolutiondescriptor/paddingpolicy-61tq3.md): Deprecated. The padding policy.
- [isConvolutionTranspose](mlcconvolutiondescriptor/isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](mlcconvolutiondescriptor/usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Convolution Layers

- [init(weights:biases:descriptor:)](mlcconvolutionlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a convolution layer with the weights, biases, and descriptor you specify.

# MLCConvolutionDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A configuration object you use to create a convolution or fully connected layer.

## Declaration

```objectivec
@interface MLCConvolutionDescriptor : NSObject
```

## Topics

### Creating Convolution Descriptors

- [descriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:](mlcconvolutiondescriptor/descriptorwithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_.md): Deprecated. Creates a convolution descriptor with the kernel sizes and number of feature channels you specify.
- [descriptorWithType:kernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/descriptorwithtype_kernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor with the type, kernel sizes, number of feature channels and groups, strides, dilation rates, and padding policy you specify.
- [descriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:strides:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/descriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel sizes, number of feature channels, strides, padding policy, and padding sizes you specify.
- [convolutionTransposeDescriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:](mlcconvolutiondescriptor/init%28transposewithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_%29.md): Deprecated. Creates a descriptor for convolution transpose with the kernel sizes and number of feature channels you specify.
- [convolutionTransposeDescriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:strides:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/convolutiontransposedescriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution transpose descriptor with the kernel sizes, number of feature channels, strides, and padding options you specify.
- [convolutionTransposeDescriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/convolutiontransposedescriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution transpose descriptor with the kernel and padding options, number of feature channels and groups, and dilation rates you specify.
- [depthwiseConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:channelMultiplier:](mlcconvolutiondescriptor/init%28depthwisewithkernelwidth_kernelheight_inputfeaturechannelcount_channelmultiplier_%29.md): Deprecated. Creates a descriptor for depthwise convolution with the kernel sizes, number of input feature channels, and channel multiplier you specify.
- [depthwiseConvolutionDescriptorWithKernelSizes:inputFeatureChannelCount:channelMultiplier:strides:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/depthwiseconvolutiondescriptorwithkernelsizes_inputfeaturechannelcount_channelmultiplier_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a depthwise convolution descriptor with the kernel and padding options, number of input feature channels, and channel multiplier you specify.
- [depthwiseConvolutionDescriptorWithKernelSizes:inputFeatureChannelCount:channelMultiplier:strides:dilationRates:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/depthwiseconvolutiondescriptorwithkernelsizes_inputfeaturechannelcount_channelmultiplier_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel and padding options, number of input channels, channel multiplier, and dilation rates you specify.
- [descriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:](mlcconvolutiondescriptor/descriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel and padding options, number of feature channels and groups, and dilation rates you specify.
- [MLCConvolutionType](mlcconvolutiontype.md): Deprecated. The convolution type specified for a convolution layer.

### Inspecting Convolution Descriptors

- [convolutionType](mlcconvolutiondescriptor/convolutiontype.md): Deprecated. The type of convolution.
- [kernelWidth](mlcconvolutiondescriptor/kernelwidth.md): Deprecated. The kernel size in x.
- [kernelHeight](mlcconvolutiondescriptor/kernelheight.md): Deprecated. The kernel size in y.
- [inputFeatureChannelCount](mlcconvolutiondescriptor/inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](mlcconvolutiondescriptor/outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strideInX](mlcconvolutiondescriptor/strideinx.md): Deprecated. The kernel stride in `x`.
- [strideInY](mlcconvolutiondescriptor/strideiny.md): Deprecated. The kernel stride in `y`.
- [dilationRateInX](mlcconvolutiondescriptor/dilationrateinx.md): Deprecated. The dilation rate, or stride of elements, in the kernel in x.
- [dilationRateInY](mlcconvolutiondescriptor/dilationrateiny.md): Deprecated. The dilation rate, or stride of elements, in the kernel in y.
- [groupCount](mlcconvolutiondescriptor/groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](mlcconvolutiondescriptor/paddingpolicy-7drfq.md): Deprecated. The padding policy.
- [paddingSizeInX](mlcconvolutiondescriptor/paddingsizeinx.md): Deprecated. The pooling size in x, left and right, to use if the padding policy is to use padding size.
- [paddingSizeInY](mlcconvolutiondescriptor/paddingsizeiny.md): Deprecated. The pooling size in y, top and bottom, to use if the padding policy is to use padding size.
- [isConvolutionTranspose](mlcconvolutiondescriptor/isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](mlcconvolutiondescriptor/usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating Convolution Layers

- [layerWithWeights:biases:descriptor:](mlcconvolutionlayer/init%28weights_biases_descriptor_%29.md): Deprecated. Creates a convolution layer with the weights, biases, and descriptor you specify.
