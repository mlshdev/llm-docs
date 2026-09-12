> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontransposegradientnode/nodewithsourcegradient:sourceimage:convolutiontransposegradientstate:weights:](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontransposegradientnode/nodewithsourcegradient:sourceimage:convolutiontransposegradientstate:weights:)

# nodeWithSourceGradient:sourceImage:convolutionTransposeGradientState:weights:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage convolutionTransposeGradientState:(MPSCNNConvolutionTransposeGradientStateNode *) gradientState weights:(id<MPSCNNConvolutionDataSource>) weights;
```
