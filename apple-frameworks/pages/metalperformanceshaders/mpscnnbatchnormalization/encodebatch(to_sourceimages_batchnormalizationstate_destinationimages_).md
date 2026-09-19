> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalization/encodebatch(to:sourceimages:batchnormalizationstate:destinationimages:)

# encodeBatch(to:sourceImages:batchNormalizationState:destinationImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(to commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], batchNormalizationState: MPSCNNBatchNormalizationState, destinationImages: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceImages:batchNormalizationState:destinationImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImages batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState destinationImages:(MPSImageBatch *) destinationImages;
```
