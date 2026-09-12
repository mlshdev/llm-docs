> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/inputfeaturechannelcount](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/inputfeaturechannelcount)

# inputFeatureChannelCount (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of feature channels in the input tensor.

## Declaration

```swift
var inputFeatureChannelCount: Int { get }
```

## See Also

### Inspecting Convolution Descriptors

- [convolutionType](convolutiontype.md): Deprecated. The type of convolution.
- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [outputFeatureChannelCount](outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [groupCount](groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](paddingpolicy-61tq3.md): Deprecated. The padding policy.
- [isConvolutionTranspose](isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.

# inputFeatureChannelCount (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of feature channels in the input tensor.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger inputFeatureChannelCount;
```

## See Also

### Inspecting Convolution Descriptors

- [convolutionType](convolutiontype.md): Deprecated. The type of convolution.
- [kernelWidth](kernelwidth.md): Deprecated. The kernel size in x.
- [kernelHeight](kernelheight.md): Deprecated. The kernel size in y.
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
