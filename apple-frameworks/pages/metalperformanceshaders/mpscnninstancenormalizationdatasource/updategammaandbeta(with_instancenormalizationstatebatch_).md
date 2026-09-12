> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnninstancenormalizationdatasource/updategammaandbeta(with:instancenormalizationstatebatch:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnninstancenormalizationdatasource/updategammaandbeta(with:instancenormalizationstatebatch:))

# updateGammaAndBeta(with:instanceNormalizationStateBatch:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
optional func updateGammaAndBeta(with commandBuffer: any MTLCommandBuffer, instanceNormalizationStateBatch: [MPSCNNInstanceNormalizationGradientState]) -> MPSCNNNormalizationGammaAndBetaState?
```

# updateGammaAndBetaWithCommandBuffer:instanceNormalizationStateBatch: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNNormalizationGammaAndBetaState *) updateGammaAndBetaWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer instanceNormalizationStateBatch:(MPSCNNInstanceNormalizationGradientStateBatch *) instanceNormalizationStateBatch;
```
