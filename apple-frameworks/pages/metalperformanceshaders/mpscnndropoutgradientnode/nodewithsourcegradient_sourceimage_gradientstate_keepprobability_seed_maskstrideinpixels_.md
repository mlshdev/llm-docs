> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropoutgradientnode/nodewithsourcegradient:sourceimage:gradientstate:keepprobability:seed:maskstrideinpixels:](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropoutgradientnode/nodewithsourcegradient:sourceimage:gradientstate:keepprobability:seed:maskstrideinpixels:)

# nodeWithSourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage gradientState:(MPSNNGradientStateNode *) gradientState keepProbability:(float) keepProbability seed:(NSUInteger) seed maskStrideInPixels:(MTLSize) maskStrideInPixels;
```
