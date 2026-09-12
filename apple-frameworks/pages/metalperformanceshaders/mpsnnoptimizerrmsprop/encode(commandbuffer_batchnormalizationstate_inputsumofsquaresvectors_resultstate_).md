> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerrmsprop/encode(commandbuffer:batchnormalizationstate:inputsumofsquaresvectors:resultstate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerrmsprop/encode(commandbuffer:batchnormalizationstate:inputsumofsquaresvectors:resultstate:))

# encode(commandBuffer:batchNormalizationState:inputSumOfSquaresVectors:resultState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, batchNormalizationState: MPSCNNBatchNormalizationState, inputSumOfSquaresVectors: [MPSVector]?, resultState: MPSCNNNormalizationGammaAndBetaState)
```

# encodeToCommandBuffer:batchNormalizationState:inputSumOfSquaresVectors:resultState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState inputSumOfSquaresVectors:(NSArray<MPSVector *> *) inputSumOfSquaresVectors resultState:(MPSCNNNormalizationGammaAndBetaState *) resultState;
```
