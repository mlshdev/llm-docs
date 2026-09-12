> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/convolutiontype](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/convolutiontype)

# convolutionType (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The type of convolution.

## Declaration

```swift
var convolutionType: MLCConvolutionType { get }
```

## See Also

### Inspecting Convolution Descriptors

- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [inputFeatureChannelCount](inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [groupCount](groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](paddingpolicy-61tq3.md): Deprecated. The padding policy.
- [isConvolutionTranspose](isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.

# convolutionType (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The type of convolution.

## Declaration

```objectivec
@property (nonatomic, readonly) MLCConvolutionType convolutionType;
```

## See Also

### Inspecting Convolution Descriptors

- [kernelWidth](kernelwidth.md): Deprecated. The kernel size in x.
- [kernelHeight](kernelheight.md): Deprecated. The kernel size in y.
- [inputFeatureChannelCount](inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strideInX](strideinx.md): Deprecated. The kernel stride in `x`.
- [strideInY](strideiny.md): Deprecated. The kernel stride in `y`.
- [dilationRateInX](dilationrateinx.md): Deprecated. The dilation rate, or stride of elements, in the kernel in x.
- [dilationRateInY](dilationrateiny.md): Deprecated. The dilation rate, or stride of elements, in the kernel in y.
- [groupCount](groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](paddingpolicy-7drfq.md): Deprecated. The padding policy.
- [paddingSizeInX](paddingsizeinx.md): Deprecated. The pooling size in x, left and right, to use if the padding policy is to use padding size.
- [paddingSizeInY](paddingsizeiny.md): Deprecated. The pooling size in y, top and bottom, to use if the padding policy is to use padding size.
- [isConvolutionTranspose](isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.
