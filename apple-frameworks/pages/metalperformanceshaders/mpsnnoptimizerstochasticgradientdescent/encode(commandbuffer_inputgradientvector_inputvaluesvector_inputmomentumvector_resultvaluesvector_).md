> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/encode(commandbuffer:inputgradientvector:inputvaluesvector:inputmomentumvector:resultvaluesvector:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/encode(commandbuffer:inputgradientvector:inputvaluesvector:inputmomentumvector:resultvaluesvector:))

# encode(commandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:resultValuesVector:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputMomentumVector: MPSVector?, resultValuesVector: MPSVector)
```

# encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:resultValuesVector: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputGradientVector:(MPSVector *) inputGradientVector inputValuesVector:(MPSVector *) inputValuesVector inputMomentumVector:(MPSVector *) inputMomentumVector resultValuesVector:(MPSVector *) resultValuesVector;
```
