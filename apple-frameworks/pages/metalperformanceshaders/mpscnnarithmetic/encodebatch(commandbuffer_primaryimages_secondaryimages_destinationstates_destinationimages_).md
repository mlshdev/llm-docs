> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnarithmetic/encodebatch(commandbuffer:primaryimages:secondaryimages:destinationstates:destinationimages:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnarithmetic/encodebatch(commandbuffer:primaryimages:secondaryimages:destinationstates:destinationimages:))

# encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationStates:destinationImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, primaryImages: [MPSImage], secondaryImages: [MPSImage], destinationStates: [MPSCNNArithmeticGradientState], destinationImages: [MPSImage])
```

# encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationStates:destinationImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer primaryImages:(MPSImageBatch *) primaryImages secondaryImages:(MPSImageBatch *) secondaryImages destinationStates:(MPSCNNArithmeticGradientStateBatch *) destinationStates destinationImages:(MPSImageBatch *) destinationImages;
```
