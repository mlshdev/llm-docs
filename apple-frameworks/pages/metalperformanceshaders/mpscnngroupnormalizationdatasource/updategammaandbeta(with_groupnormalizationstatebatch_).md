> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnngroupnormalizationdatasource/updategammaandbeta(with:groupnormalizationstatebatch:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnngroupnormalizationdatasource/updategammaandbeta(with:groupnormalizationstatebatch:))

# updateGammaAndBeta(with:groupNormalizationStateBatch:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
optional func updateGammaAndBeta(with commandBuffer: any MTLCommandBuffer, groupNormalizationStateBatch: [MPSCNNGroupNormalizationGradientState]) -> MPSCNNNormalizationGammaAndBetaState?
```

# updateGammaAndBetaWithCommandBuffer:groupNormalizationStateBatch: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNNormalizationGammaAndBetaState *) updateGammaAndBetaWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer groupNormalizationStateBatch:(MPSCNNGroupNormalizationGradientStateBatch *) groupNormalizationStateBatch;
```
