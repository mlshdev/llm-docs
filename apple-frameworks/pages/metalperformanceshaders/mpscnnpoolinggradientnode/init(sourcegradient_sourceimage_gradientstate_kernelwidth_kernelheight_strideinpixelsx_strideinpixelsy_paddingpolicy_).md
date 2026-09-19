> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolinggradientnode/init(sourcegradient:sourceimage:gradientstate:kernelwidth:kernelheight:strideinpixelsx:strideinpixelsy:paddingpolicy:)

# init(sourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:paddingPolicy:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
init(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, gradientState: MPSNNGradientStateNode, kernelWidth: Int, kernelHeight: Int, strideInPixelsX: Int, strideInPixelsY: Int, paddingPolicy: (any MPSNNPadding)?)
```

# initWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:paddingPolicy: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage gradientState:(MPSNNGradientStateNode *) gradientState kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight strideInPixelsX:(NSUInteger) strideInPixelsX strideInPixelsY:(NSUInteger) strideInPixelsY paddingPolicy:(id<MPSNNPadding>) paddingPolicy;
```
