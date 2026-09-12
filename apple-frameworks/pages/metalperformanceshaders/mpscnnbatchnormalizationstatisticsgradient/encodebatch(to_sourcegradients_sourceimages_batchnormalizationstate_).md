> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalizationstatisticsgradient/encodebatch(to:sourcegradients:sourceimages:batchnormalizationstate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationstatisticsgradient/encodebatch(to:sourcegradients:sourceimages:batchnormalizationstate:))

# encodeBatch(to:sourceGradients:sourceImages:batchNormalizationState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(to commandBuffer: any MTLCommandBuffer, sourceGradients: [MPSImage], sourceImages: [MPSImage], batchNormalizationState: MPSCNNBatchNormalizationState)
```

# encodeBatchToCommandBuffer:sourceGradients:sourceImages:batchNormalizationState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradients:(MPSImageBatch *) sourceGradients sourceImages:(MPSImageBatch *) sourceImages batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState;
```
