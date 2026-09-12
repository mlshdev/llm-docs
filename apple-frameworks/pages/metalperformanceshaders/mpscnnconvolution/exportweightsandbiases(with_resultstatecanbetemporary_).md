> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolution/exportweightsandbiases(with:resultstatecanbetemporary:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/exportweightsandbiases(with:resultstatecanbetemporary:))

# exportWeightsAndBiases(with:resultStateCanBeTemporary:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func exportWeightsAndBiases(with commandBuffer: any MTLCommandBuffer, resultStateCanBeTemporary: Bool) -> MPSCNNConvolutionWeightsAndBiasesState
```

# exportWeightsAndBiasesWithCommandBuffer:resultStateCanBeTemporary: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSCNNConvolutionWeightsAndBiasesState *) exportWeightsAndBiasesWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer resultStateCanBeTemporary:(BOOL) resultStateCanBeTemporary;
```
