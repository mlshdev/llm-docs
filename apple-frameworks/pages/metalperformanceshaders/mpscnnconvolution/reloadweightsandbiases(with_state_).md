> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolution/reloadweightsandbiases(with:state:)

# reloadWeightsAndBiases(with:state:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func reloadWeightsAndBiases(with commandBuffer: any MTLCommandBuffer, state: MPSCNNConvolutionWeightsAndBiasesState)
```

# reloadWeightsAndBiasesWithCommandBuffer:state: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) reloadWeightsAndBiasesWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer state:(MPSCNNConvolutionWeightsAndBiasesState *) state;
```
