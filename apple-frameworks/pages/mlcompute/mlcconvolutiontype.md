> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiontype](https://developer.apple.com/documentation/mlcompute/mlcconvolutiontype)

# MLCConvolutionType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The convolution type specified for a convolution layer.

## Declaration

```swift
enum MLCConvolutionType
```

## Topics

### Enumeration Cases

- [MLCConvolutionType.standard](mlcconvolutiontype/standard.md): Deprecated.
- [MLCConvolutionType.depthwise](mlcconvolutiontype/depthwise.md): Deprecated.
- [MLCConvolutionType.transposed](mlcconvolutiontype/transposed.md): Deprecated.
- [debugDescription](mlcconvolutiontype/debugdescription.md): A textual description of the convolution type, suitable for debugging.

### Initializers

- [init(rawValue:)](mlcconvolutiontype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Convolution Descriptors

- [init(type:kernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:)](mlcconvolutiondescriptor/init%28type_kernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_%29.md): Deprecated. Creates a descriptor for the type, sizes, number of feature channels, group count, strides, dilation rates, and padding policy you specify.
- [init(transposeWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:)](mlcconvolutiondescriptor/init%28transposewithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_%29.md): Deprecated. Creates a descriptor for convolution transpose with the kernel sizes and number of feature channels you specify.
- [init(depthwiseWithKernelWidth:kernelHeight:inputFeatureChannelCount:channelMultiplier:)](mlcconvolutiondescriptor/init%28depthwisewithkernelwidth_kernelheight_inputfeaturechannelcount_channelmultiplier_%29.md): Deprecated. Creates a descriptor for depthwise convolution with the kernel sizes, number of input feature channels, and channel multiplier you specify.

# MLCConvolutionType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The convolution type specified for a convolution layer.

## Declaration

```objectivec
enum MLCConvolutionType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCConvolutionTypeStandard](mlcconvolutiontype/standard.md): Deprecated.
- [MLCConvolutionTypeDepthwise](mlcconvolutiontype/depthwise.md): Deprecated.
- [MLCConvolutionTypeTransposed](mlcconvolutiontype/transposed.md): Deprecated.
- [MLCConvolutionTypeDebugDescription](mlcconvolutiontype/debugdescription.md): A textual description of the convolution type, suitable for debugging.

## See Also

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
