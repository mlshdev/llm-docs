> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropoutgradientnode/init(sourcegradient:sourceimage:gradientstate:keepprobability:seed:maskstrideinpixels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropoutgradientnode/init(sourcegradient:sourceimage:gradientstate:keepprobability:seed:maskstrideinpixels:))

# init(sourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
init(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, keepProbability: Float, seed: Int, maskStrideInPixels: MTLSize)
```

# initWithSourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage gradientState:(MPSNNGradientStateNode *) gradientState keepProbability:(float) keepProbability seed:(NSUInteger) seed maskStrideInPixels:(MTLSize) maskStrideInPixels;
```
