> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/encodebatch(commandbuffer:sourceimages:convolutiongradientstates:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/encodebatch(commandbuffer:sourceimages:convolutiongradientstates:))

# encodeBatch(commandBuffer:sourceImages:convolutionGradientStates:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages sourceImage: [MPSImage], convolutionGradientStates convolutionGradientState: [MPSCNNConvolutionGradientState]?) -> [MPSImage]
```

# encodeBatchToCommandBuffer:sourceImages:convolutionGradientStates: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImage convolutionGradientStates:(MPSCNNConvolutionGradientStateBatch *) convolutionGradientState;
```
