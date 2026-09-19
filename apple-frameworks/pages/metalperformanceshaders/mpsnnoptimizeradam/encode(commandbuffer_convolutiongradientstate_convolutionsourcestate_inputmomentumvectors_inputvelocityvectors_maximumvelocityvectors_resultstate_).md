> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizeradam/encode(commandbuffer:convolutiongradientstate:convolutionsourcestate:inputmomentumvectors:inputvelocityvectors:maximumvelocityvectors:resultstate:)

# encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputMomentumVectors: [MPSVector], inputVelocityVectors: [MPSVector], maximumVelocityVectors: [MPSVector]?, resultState: MPSCNNConvolutionWeightsAndBiasesState)
```

# encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputMomentumVectors:inputVelocityVectors:maximumVelocityVectors:resultState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer convolutionGradientState:(MPSCNNConvolutionGradientState *) convolutionGradientState convolutionSourceState:(MPSCNNConvolutionWeightsAndBiasesState *) convolutionSourceState inputMomentumVectors:(NSArray<MPSVector *> *) inputMomentumVectors inputVelocityVectors:(NSArray<MPSVector *> *) inputVelocityVectors maximumVelocityVectors:(NSArray<MPSVector *> *) maximumVelocityVectors resultState:(MPSCNNConvolutionWeightsAndBiasesState *) resultState;
```
