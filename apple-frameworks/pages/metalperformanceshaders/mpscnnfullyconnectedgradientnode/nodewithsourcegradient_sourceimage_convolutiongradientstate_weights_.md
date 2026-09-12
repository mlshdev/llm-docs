> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnfullyconnectedgradientnode/nodewithsourcegradient:sourceimage:convolutiongradientstate:weights:](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnfullyconnectedgradientnode/nodewithsourcegradient:sourceimage:convolutiongradientstate:weights:)

# nodeWithSourceGradient:sourceImage:convolutionGradientState:weights:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage convolutionGradientState:(MPSCNNConvolutionGradientStateNode *) gradientState weights:(id<MPSCNNConvolutionDataSource>) weights;
```
