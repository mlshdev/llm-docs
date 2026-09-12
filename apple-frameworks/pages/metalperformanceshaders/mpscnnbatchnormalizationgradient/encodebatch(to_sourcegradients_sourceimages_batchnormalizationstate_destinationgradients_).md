> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalizationgradient/encodebatch(to:sourcegradients:sourceimages:batchnormalizationstate:destinationgradients:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationgradient/encodebatch(to:sourcegradients:sourceimages:batchnormalizationstate:destinationgradients:))

# encodeBatch(to:sourceGradients:sourceImages:batchNormalizationState:destinationGradients:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(to commandBuffer: any MTLCommandBuffer, sourceGradients: [MPSImage], sourceImages: [MPSImage], batchNormalizationState: MPSCNNBatchNormalizationState, destinationGradients: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceGradients:sourceImages:batchNormalizationState:destinationGradients: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradients:(MPSImageBatch *) sourceGradients sourceImages:(MPSImageBatch *) sourceImages batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState destinationGradients:(MPSImageBatch *) destinationGradients;
```
