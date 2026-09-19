> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmaxgradientnode/nodewithsourcegradient:sourceimage:gradientstate:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:dilationratex:dilationratey:

# nodeWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage gradientState:(MPSNNGradientStateNode *) gradientState kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY dilationRateX:(NSUInteger) dilationRateX dilationRateY:(NSUInteger) dilationRateY;
```
