> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/temporaryresultstatebatch(commandbuffer:sourceimage:sourcestates:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/temporaryresultstatebatch(commandbuffer:sourceimage:sourcestates:destinationimage:))

# temporaryResultStateBatch(commandBuffer:sourceImage:sourceStates:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func temporaryResultStateBatch(commandBuffer: any MTLCommandBuffer, sourceImage: [MPSImage], sourceStates: [[MPSCNNConvolutionGradientState]]?, destinationImage: [MPSImage]) -> [MPSCNNConvolutionTransposeGradientState]?
```

# temporaryResultStateBatchForCommandBuffer:sourceImage:sourceStates:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNConvolutionTransposeGradientStateBatch *) temporaryResultStateBatchForCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImageBatch *) sourceImage sourceStates:(NSArray<NSArray<MPSCNNConvolutionGradientState *> *> *) sourceStates destinationImage:(MPSImageBatch *) destinationImage;
```
