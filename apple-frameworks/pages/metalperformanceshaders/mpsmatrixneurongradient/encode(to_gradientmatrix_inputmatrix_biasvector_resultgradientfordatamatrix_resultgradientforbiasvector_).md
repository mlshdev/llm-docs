> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixneurongradient/encode(to:gradientmatrix:inputmatrix:biasvector:resultgradientfordatamatrix:resultgradientforbiasvector:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixneurongradient/encode(to:gradientmatrix:inputmatrix:biasvector:resultgradientfordatamatrix:resultgradientforbiasvector:))

# encode(to:gradientMatrix:inputMatrix:biasVector:resultGradientForDataMatrix:resultGradientForBiasVector:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, biasVector: MPSVector?, resultGradientForDataMatrix: MPSMatrix, resultGradientForBiasVector: MPSVector?)
```

# encodeToCommandBuffer:gradientMatrix:inputMatrix:biasVector:resultGradientForDataMatrix:resultGradientForBiasVector: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer gradientMatrix:(MPSMatrix *) gradientMatrix inputMatrix:(MPSMatrix *) inputMatrix biasVector:(MPSVector *) biasVector resultGradientForDataMatrix:(MPSMatrix *) resultGradientForDataMatrix resultGradientForBiasVector:(MPSVector *) resultGradientForBiasVector;
```
