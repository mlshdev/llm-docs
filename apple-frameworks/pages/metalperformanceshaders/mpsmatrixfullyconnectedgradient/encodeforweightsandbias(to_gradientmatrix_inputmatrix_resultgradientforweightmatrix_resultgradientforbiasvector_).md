> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfullyconnectedgradient/encodeforweightsandbias(to:gradientmatrix:inputmatrix:resultgradientforweightmatrix:resultgradientforbiasvector:)

# encodeForWeightsAndBias(to:gradientMatrix:inputMatrix:resultGradientForWeightMatrix:resultGradientForBiasVector:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeForWeightsAndBias(to commandBuffer: any MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, resultGradientForWeightMatrix: MPSMatrix, resultGradientForBiasVector: MPSVector?)
```

# encodeGradientForWeightsAndBiasToCommandBuffer:gradientMatrix:inputMatrix:resultGradientForWeightMatrix:resultGradientForBiasVector: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeGradientForWeightsAndBiasToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer gradientMatrix:(const MPSMatrix *) gradientMatrix inputMatrix:(const MPSMatrix *) inputMatrix resultGradientForWeightMatrix:(MPSMatrix *) resultGradientForWeightMatrix resultGradientForBiasVector:(MPSVector *) resultGradientForBiasVector;
```
