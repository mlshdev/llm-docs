> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontransposegradientnode/init(sourcegradient:sourceimage:convolutiontransposegradientstate:weights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontransposegradientnode/init(sourcegradient:sourceimage:convolutiontransposegradientstate:weights:))

# init(sourceGradient:sourceImage:convolutionTransposeGradientState:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, convolutionTransposeGradientState gradientState: MPSCNNConvolutionTransposeGradientStateNode, weights: (any MPSCNNConvolutionDataSource)?)
```

# initWithSourceGradient:sourceImage:convolutionTransposeGradientState:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage convolutionTransposeGradientState:(MPSCNNConvolutionTransposeGradientStateNode *) gradientState weights:(id<MPSCNNConvolutionDataSource>) weights;
```
