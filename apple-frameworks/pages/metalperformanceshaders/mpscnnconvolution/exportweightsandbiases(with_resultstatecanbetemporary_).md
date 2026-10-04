> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/exportweightsandbiases(with:resultstatecanbetemporary:)

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
