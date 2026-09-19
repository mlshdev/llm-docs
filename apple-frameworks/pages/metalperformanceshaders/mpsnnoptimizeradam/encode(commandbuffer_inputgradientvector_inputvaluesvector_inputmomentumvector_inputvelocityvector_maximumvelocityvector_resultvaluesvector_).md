> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizeradam/encode(commandbuffer:inputgradientvector:inputvaluesvector:inputmomentumvector:inputvelocityvector:maximumvelocityvector:resultvaluesvector:)

# encode(commandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:maximumVelocityVector:resultValuesVector:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, inputGradientVector: MPSVector, inputValuesVector: MPSVector, inputMomentumVector: MPSVector, inputVelocityVector: MPSVector, maximumVelocityVector: MPSVector?, resultValuesVector: MPSVector)
```

# encodeToCommandBuffer:inputGradientVector:inputValuesVector:inputMomentumVector:inputVelocityVector:maximumVelocityVector:resultValuesVector: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputGradientVector:(MPSVector *) inputGradientVector inputValuesVector:(MPSVector *) inputValuesVector inputMomentumVector:(MPSVector *) inputMomentumVector inputVelocityVector:(MPSVector *) inputVelocityVector maximumVelocityVector:(MPSVector *) maximumVelocityVector resultValuesVector:(MPSVector *) resultValuesVector;
```
