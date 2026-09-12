> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcconvolutiondescriptor/strides](https://developer.apple.com/documentation/mlcompute/mlcconvolutiondescriptor/strides)

# strides

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

A tuple that contains the kernel strides for y and x.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var strides: (y: Int, x: Int) { get }
```

## See Also

### Inspecting Convolution Descriptors

- [convolutionType](convolutiontype.md): Deprecated. The type of convolution.
- [kernelSizes](kernelsizes.md): Deprecated. A tuple that contains the kernel sizes for height and width.
- [inputFeatureChannelCount](inputfeaturechannelcount.md): Deprecated. The number of feature channels in the input tensor.
- [outputFeatureChannelCount](outputfeaturechannelcount.md): Deprecated. The number of feature channels in the output tensor.
- [dilationRates](dilationrates.md): Deprecated. A tuple that contains the dilation rates for y and x.
- [groupCount](groupcount.md): Deprecated. The number of groups.
- [paddingPolicy](paddingpolicy-61tq3.md): Deprecated. The padding policy.
- [isConvolutionTranspose](isconvolutiontranspose.md): Deprecated. A Boolean that indicates whether this is a convolution transpose.
- [usesDepthwiseConvolution](usesdepthwiseconvolution.md): Deprecated. A Boolean that indicates whether you use depthwise convolution.
