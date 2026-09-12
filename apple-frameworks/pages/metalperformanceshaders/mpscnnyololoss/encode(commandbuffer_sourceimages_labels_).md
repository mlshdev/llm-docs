> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnyololoss/encode(commandbuffer:sourceimages:labels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnyololoss/encode(commandbuffer:sourceimages:labels:))

# encode(commandBuffer:sourceImages:labels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImages sourceImage: [MPSImage], labels: [MPSCNNLossLabels]) -> [MPSImage]
```

# encodeBatchToCommandBuffer:sourceImages:labels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImage labels:(MPSCNNLossLabelsBatch *) labels;
```
