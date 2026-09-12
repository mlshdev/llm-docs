> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/resultstatebatch(sourceimage:sourcestates:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/resultstatebatch(sourceimage:sourcestates:destinationimage:))

# resultStateBatch(sourceImage:sourceStates:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func resultStateBatch(sourceImage: [MPSImage], sourceStates: [[MPSCNNConvolutionGradientState]]?, destinationImage: [MPSImage]) -> [MPSCNNConvolutionTransposeGradientState]?
```

# resultStateBatchForSourceImage:sourceStates:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNConvolutionTransposeGradientStateBatch *) resultStateBatchForSourceImage:(MPSImageBatch *) sourceImage sourceStates:(NSArray<NSArray<MPSCNNConvolutionGradientState *> *> *) sourceStates destinationImage:(MPSImageBatch *) destinationImage;
```
