> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontransposenode/nodewithsource:convolutiongradientstate:weights:

# nodeWithSource:convolutionGradientState:weights:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSource:(MPSNNImageNode *) sourceNode convolutionGradientState:(MPSCNNConvolutionGradientStateNode *) convolutionGradientState weights:(id<MPSCNNConvolutionDataSource>) weights;
```
