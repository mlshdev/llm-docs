> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/convolutiontransposedescriptorwithkernelsizes:inputfeaturechannelcount:outputfeaturechannelcount:groupcount:strides:dilationrates:paddingpolicy:paddingsizes:](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/convolutiontransposedescriptorwithkernelsizes:inputfeaturechannelcount:outputfeaturechannelcount:groupcount:strides:dilationrates:paddingpolicy:paddingsizes:)

# convolutionTransposeDescriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a convolution transpose descriptor with the kernel and padding options, number of feature channels and groups, and dilation rates you specify.

## Declaration

```objectivec
+ (instancetype) convolutionTransposeDescriptorWithKernelSizes:(NSArray<NSNumber *> *) kernelSizes inputFeatureChannelCount:(NSUInteger) inputFeatureChannelCount outputFeatureChannelCount:(NSUInteger) outputFeatureChannelCount groupCount:(NSUInteger) groupCount strides:(NSArray<NSNumber *> *) strides dilationRates:(NSArray<NSNumber *> *) dilationRates paddingPolicy:(MLCPaddingPolicy) paddingPolicy paddingSizes:(NSArray<NSNumber *> *) paddingSizes;
```

## Parameters

- `kernelSizes`: An array that contains the kernel sizes for y and x.
- `inputFeatureChannelCount`: The number of feature channels in the input tensor.
- `outputFeatureChannelCount`: The number of feature channels in the output tensor.
- `groupCount`: The number of groups.
- `strides`: An array that contains the kernel strides for y and x.
- `dilationRates`: An array that contains the dilation rates for y and x.
- `paddingPolicy`: The padding policy.
- `paddingSizes`: An array that contains the padding sizes for y and x, if the padding policy is to use padding size.

<a id="return-value"></a>

## Return Value

A convolution descriptor.

## See Also

### Creating Convolution Descriptors

- [descriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:](descriptorwithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_.md): Deprecated. Creates a convolution descriptor with the kernel sizes and number of feature channels you specify.
- [descriptorWithType:kernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:](descriptorwithtype_kernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a descriptor with the type, kernel sizes, number of feature channels and groups, strides, dilation rates, and padding policy you specify.
- [descriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:strides:paddingPolicy:paddingSizes:](descriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel sizes, number of feature channels, strides, padding policy, and padding sizes you specify.
- [convolutionTransposeDescriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:](init%28transposewithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_%29.md): Deprecated. Creates a descriptor for convolution transpose with the kernel sizes and number of feature channels you specify.
- [convolutionTransposeDescriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:strides:paddingPolicy:paddingSizes:](convolutiontransposedescriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution transpose descriptor with the kernel sizes, number of feature channels, strides, and padding options you specify.
- [depthwiseConvolutionDescriptorWithKernelWidth:kernelHeight:inputFeatureChannelCount:channelMultiplier:](init%28depthwisewithkernelwidth_kernelheight_inputfeaturechannelcount_channelmultiplier_%29.md): Deprecated. Creates a descriptor for depthwise convolution with the kernel sizes, number of input feature channels, and channel multiplier you specify.
- [depthwiseConvolutionDescriptorWithKernelSizes:inputFeatureChannelCount:channelMultiplier:strides:paddingPolicy:paddingSizes:](depthwiseconvolutiondescriptorwithkernelsizes_inputfeaturechannelcount_channelmultiplier_strides_paddingpolicy_paddingsizes_.md): Deprecated. Creates a depthwise convolution descriptor with the kernel and padding options, number of input feature channels, and channel multiplier you specify.
- [depthwiseConvolutionDescriptorWithKernelSizes:inputFeatureChannelCount:channelMultiplier:strides:dilationRates:paddingPolicy:paddingSizes:](depthwiseconvolutiondescriptorwithkernelsizes_inputfeaturechannelcount_channelmultiplier_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel and padding options, number of input channels, channel multiplier, and dilation rates you specify.
- [descriptorWithKernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:paddingSizes:](descriptorwithkernelsizes_inputfeaturechannelcount_outputfeaturechannelcount_groupcount_strides_dilationrates_paddingpolicy_paddingsizes_.md): Deprecated. Creates a convolution descriptor with the kernel and padding options, number of feature channels and groups, and dilation rates you specify.
- [MLCConvolutionType](../mlcconvolutiontype.md): Deprecated. The convolution type specified for a convolution layer.
