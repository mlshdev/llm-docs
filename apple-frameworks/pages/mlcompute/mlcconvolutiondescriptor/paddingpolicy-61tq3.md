> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/paddingpolicy-61tq3](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/paddingpolicy-61tq3)

# paddingPolicy

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The padding policy.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var paddingPolicy: MLCPaddingPolicy { get }
```

## See Also

### Inspecting Convolution Descriptors

- [convolutionType](convolutiontype.md): Deprecated. The type of convolution.
- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [inputFeatureChannelCount](inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [strides](strides.md): Deprecated. A tuple that contains the kernel strides for y and x.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [groupCount](groupcount.md): Deprecated. The number of groups.
- [isConvolutionTranspose](isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.
