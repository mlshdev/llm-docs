> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/encode(commandbuffer:inputgradientmatrix:inputvaluesmatrix:inputmomentummatrix:resultvaluesmatrix:)

# encode(commandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:resultValuesMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, inputGradientMatrix: MPSMatrix, inputValuesMatrix: MPSMatrix, inputMomentumMatrix: MPSMatrix?, resultValuesMatrix: MPSMatrix)
```

# encodeToCommandBuffer:inputGradientMatrix:inputValuesMatrix:inputMomentumMatrix:resultValuesMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputGradientMatrix:(MPSMatrix *) inputGradientMatrix inputValuesMatrix:(MPSMatrix *) inputValuesMatrix inputMomentumMatrix:(MPSMatrix *) inputMomentumMatrix resultValuesMatrix:(MPSMatrix *) resultValuesMatrix;
```
