> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnlossgradientnode/init(sources:gradientstate:lossdescriptor:islabelsgradientfilter:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradientnode/init(sources:gradientstate:lossdescriptor:islabelsgradientfilter:))

# init(sources:gradientState:lossDescriptor:isLabelsGradientFilter:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(sources sourceNodes: [MPSNNImageNode], gradientState: MPSNNGradientStateNode?, lossDescriptor descriptor: MPSCNNLossDescriptor, isLabelsGradientFilter: Bool)
```

# initWithSources:gradientState:lossDescriptor:isLabelsGradientFilter: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSources:(NSArray<MPSNNImageNode *> *) sourceNodes gradientState:(MPSNNGradientStateNode *) gradientState lossDescriptor:(MPSCNNLossDescriptor *) descriptor isLabelsGradientFilter:(BOOL) isLabelsGradientFilter;
```
