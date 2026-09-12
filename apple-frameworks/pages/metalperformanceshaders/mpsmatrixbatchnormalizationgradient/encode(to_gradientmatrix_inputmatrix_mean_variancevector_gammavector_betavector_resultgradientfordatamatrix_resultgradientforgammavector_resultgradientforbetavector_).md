> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixbatchnormalizationgradient/encode(to:gradientmatrix:inputmatrix:mean:variancevector:gammavector:betavector:resultgradientfordatamatrix:resultgradientforgammavector:resultgradientforbetavector:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixbatchnormalizationgradient/encode(to:gradientmatrix:inputmatrix:mean:variancevector:gammavector:betavector:resultgradientfordatamatrix:resultgradientforgammavector:resultgradientforbetavector:))

# encode(to:gradientMatrix:inputMatrix:mean:varianceVector:gammaVector:betaVector:resultGradientForDataMatrix:resultGradientForGammaVector:resultGradientForBetaVector:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, gradientMatrix: MPSMatrix, inputMatrix: MPSMatrix, mean meanVector: MPSVector, varianceVector: MPSVector, gammaVector: MPSVector?, betaVector: MPSVector?, resultGradientForDataMatrix: MPSMatrix, resultGradientForGammaVector: MPSVector?, resultGradientForBetaVector: MPSVector?)
```

# encodeToCommandBuffer:gradientMatrix:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultGradientForDataMatrix:resultGradientForGammaVector:resultGradientForBetaVector: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer gradientMatrix:(MPSMatrix *) gradientMatrix inputMatrix:(MPSMatrix *) inputMatrix meanVector:(MPSVector *) meanVector varianceVector:(MPSVector *) varianceVector gammaVector:(MPSVector *) gammaVector betaVector:(MPSVector *) betaVector resultGradientForDataMatrix:(MPSMatrix *) resultGradientForDataMatrix resultGradientForGammaVector:(MPSVector *) resultGradientForGammaVector resultGradientForBetaVector:(MPSVector *) resultGradientForBetaVector;
```
