> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnforwardloss/encodebatch(commandbuffer:sourceimages:labels:weights:destinationstates:destinationimages:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnforwardloss/encodebatch(commandbuffer:sourceimages:labels:weights:destinationstates:destinationimages:))

# encodeBatch(commandBuffer:sourceImages:labels:weights:destinationStates:destinationImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], labels: [MPSImage], weights: [MPSImage]?, destinationStates: [MPSState]?, destinationImages: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceImages:labels:weights:destinationStates:destinationImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImages labels:(MPSImageBatch *) labels weights:(MPSImageBatch *) weights destinationStates:(MPSStateBatch *) destinationStates destinationImages:(MPSImageBatch *) destinationImages;
```
