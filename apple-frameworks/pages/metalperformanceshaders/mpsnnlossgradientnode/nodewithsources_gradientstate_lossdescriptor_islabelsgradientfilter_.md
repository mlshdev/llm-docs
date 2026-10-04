> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradientnode/nodewithsources:gradientstate:lossdescriptor:islabelsgradientfilter:

# nodeWithSources:gradientState:lossDescriptor:isLabelsGradientFilter:

**Interface language:** Objective-C

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSources:(NSArray<MPSNNImageNode *> *) sourceNodes gradientState:(MPSNNGradientStateNode *) gradientState lossDescriptor:(MPSCNNLossDescriptor *) descriptor isLabelsGradientFilter:(BOOL) isLabelsGradientFilter;
```
