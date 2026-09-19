> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradientnode/init(sourcegradient:sourceimage:labels:gradientstate:lossdescriptor:islabelsgradientfilter:)

# init(sourceGradient:sourceImage:labels:gradientState:lossDescriptor:isLabelsGradientFilter:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(sourceGradient: MPSNNImageNode, sourceImage: MPSNNImageNode, labels: MPSNNImageNode, gradientState: MPSNNGradientStateNode?, lossDescriptor descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: Bool)
```

# initWithSourceGradient:sourceImage:labels:gradientState:lossDescriptor:isLabelsGradientFilter: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSourceGradient:(MPSNNImageNode *) sourceGradient sourceImage:(MPSNNImageNode *) sourceImage labels:(MPSNNImageNode *) labels gradientState:(MPSNNGradientStateNode *) gradientState lossDescriptor:(MPSCNNLossDescriptor *) descriptor isLabelsGradientFilter:(BOOL) isLabelsGradientFilter;
```
