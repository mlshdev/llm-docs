> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/temporaryresultstate(commandbuffer:sourceimage:sourcestates:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/temporaryresultstate(commandbuffer:sourceimage:sourcestates:destinationimage:))

# temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func temporaryResultState(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, sourceStates: [MPSCNNConvolutionGradientState]?, destinationImage: MPSImage) -> MPSCNNConvolutionTransposeGradientState?
```

# temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNConvolutionTransposeGradientState *) temporaryResultStateForCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage sourceStates:(NSArray<MPSCNNConvolutionGradientState *> *) sourceStates destinationImage:(MPSImage *) destinationImage;
```
