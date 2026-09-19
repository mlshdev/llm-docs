> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnloss/encode(commandbuffer:sourceimages:labels:destinationimages:)

# encode(commandBuffer:sourceImages:labels:destinationImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImages sourceImage: [MPSImage], labels: [MPSCNNLossLabels], destinationImages destinationImage: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceImages:labels:destinationImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImage labels:(MPSCNNLossLabelsBatch *) labels destinationImages:(MPSImageBatch *) destinationImage;
```
