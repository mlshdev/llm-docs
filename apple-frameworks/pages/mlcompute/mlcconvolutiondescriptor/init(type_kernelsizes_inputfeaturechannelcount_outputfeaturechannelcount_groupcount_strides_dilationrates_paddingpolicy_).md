> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/init(type:kernelsizes:inputfeaturechannelcount:outputfeaturechannelcount:groupcount:strides:dilationrates:paddingpolicy:)](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/init(type:kernelsizes:inputfeaturechannelcount:outputfeaturechannelcount:groupcount:strides:dilationrates:paddingpolicy:))

# init(type:kernelSizes:inputFeatureChannelCount:outputFeatureChannelCount:groupCount:strides:dilationRates:paddingPolicy:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a descriptor for the type, sizes, number of feature channels, group count, strides, dilation rates, and padding policy you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init(type: MLCConvolutionType = .standard, kernelSizes: (height: Int, width: Int), inputFeatureChannelCount: Int, outputFeatureChannelCount: Int, groupCount: Int = 1, strides: (y: Int, x: Int) = (1, 1), dilationRates: (y: Int, x: Int) = (1, 1), paddingPolicy: MLCPaddingPolicy = .same)
```

## Parameters

- `type`: The convolution type.
- `kernelSizes`: A tuple that contains the kernel sizes for y and x.
- `inputFeatureChannelCount`: The number of feature channels in the input tensor.
- `outputFeatureChannelCount`: The number of feature channels in the output tensor.
- `groupCount`: The number of groups.
- `strides`: A tuple that contains the kernel strides for y and x.
- `dilationRates`: A tuple that contains the dilation rates for y and x.
- `paddingPolicy`: The padding policy.

## See Also

### Creating Convolution Descriptors

- [init(transposeWithKernelWidth:kernelHeight:inputFeatureChannelCount:outputFeatureChannelCount:)](init%28transposewithkernelwidth_kernelheight_inputfeaturechannelcount_outputfeaturechannelcount_%29.md): Deprecated. Creates a descriptor for convolution transpose with the kernel sizes and number of feature channels you specify.
- [init(depthwiseWithKernelWidth:kernelHeight:inputFeatureChannelCount:channelMultiplier:)](init%28depthwisewithkernelwidth_kernelheight_inputfeaturechannelcount_channelmultiplier_%29.md): Deprecated. Creates a descriptor for depthwise convolution with the kernel sizes, number of input feature channels, and channel multiplier you specify.
- [MLCConvolutionType](../mlcconvolutiontype.md): Deprecated. The convolution type specified for a convolution layer.
