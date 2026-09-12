> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerrmsprop/encode(commandbuffer:convolutiongradientstate:convolutionsourcestate:inputsumofsquaresvectors:resultstate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerrmsprop/encode(commandbuffer:convolutiongradientstate:convolutionsourcestate:inputsumofsquaresvectors:resultstate:))

# encode(commandBuffer:convolutionGradientState:convolutionSourceState:inputSumOfSquaresVectors:resultState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, convolutionGradientState: MPSCNNConvolutionGradientState, convolutionSourceState: MPSCNNConvolutionWeightsAndBiasesState, inputSumOfSquaresVectors: [MPSVector]?, resultState: MPSCNNConvolutionWeightsAndBiasesState)
```

# encodeToCommandBuffer:convolutionGradientState:convolutionSourceState:inputSumOfSquaresVectors:resultState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer convolutionGradientState:(MPSCNNConvolutionGradientState *) convolutionGradientState convolutionSourceState:(MPSCNNConvolutionWeightsAndBiasesState *) convolutionSourceState inputSumOfSquaresVectors:(NSArray<MPSVector *> *) inputSumOfSquaresVectors resultState:(MPSCNNConvolutionWeightsAndBiasesState *) resultState;
```
