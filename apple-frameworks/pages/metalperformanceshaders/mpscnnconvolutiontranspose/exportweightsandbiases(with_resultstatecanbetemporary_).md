> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/exportweightsandbiases(with:resultstatecanbetemporary:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/exportweightsandbiases(with:resultstatecanbetemporary:))

# exportWeightsAndBiases(with:resultStateCanBeTemporary:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func exportWeightsAndBiases(with commandBuffer: any MTLCommandBuffer, resultStateCanBeTemporary: Bool) -> MPSCNNConvolutionWeightsAndBiasesState
```

# exportWeightsAndBiasesWithCommandBuffer:resultStateCanBeTemporary: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNConvolutionWeightsAndBiasesState *) exportWeightsAndBiasesWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer resultStateCanBeTemporary:(BOOL) resultStateCanBeTemporary;
```
