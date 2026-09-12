> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpoolingdescriptor/dilationrateiny](https://developer.apple.com/documentation/mlcompute/mlcpoolingdescriptor/dilationrateiny)

# dilationRateInY

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The kernel dilation rate, or stride of elements, in y.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger dilationRateInY;
```

## See Also

### Inspecting Pooling Descriptors

- [poolingType](poolingtype-9daku.md): Deprecated. The pooling operation type.
- [kernelWidth](kernelwidth.md): Deprecated. The pooling kernel size in x.
- [kernelHeight](kernelheight.md): Deprecated. The pooling kernel size in y.
- [strideInX](strideinx.md): Deprecated. The stride of the kernel in x.
- [strideInY](strideiny.md): Deprecated. The stride of the kernel in y.
- [dilationRateInX](dilationrateinx.md): Deprecated. The kernel dilation rate, or stride of elements, in x.
- [paddingPolicy](paddingpolicy-1e6rg.md): Deprecated. The padding policy.
- [paddingSizeInX](paddingsizeinx.md): Deprecated. The padding size in x, left and right, to use if the padding policy is to use padding size.
- [paddingSizeInY](paddingsizeiny.md): Deprecated. The padding size in y, top and bottom, to use if the padding policy is to use padding size.
- [countIncludesPadding](countincludespadding.md): Deprecated. A Boolean that indicates whether you include zero padding in the averaging calculation.
