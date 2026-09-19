> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixbatchnormalization/encode(commandbuffer:inputmatrix:meanvector:variancevector:gammavector:betavector:resultmatrix:)

# encode(commandBuffer:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, inputMatrix: MPSMatrix, meanVector: MPSVector, varianceVector: MPSVector, gammaVector: MPSVector?, betaVector: MPSVector?, resultMatrix: MPSMatrix)
```

# encodeToCommandBuffer:inputMatrix:meanVector:varianceVector:gammaVector:betaVector:resultMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputMatrix:(MPSMatrix *) inputMatrix meanVector:(MPSVector *) meanVector varianceVector:(MPSVector *) varianceVector gammaVector:(MPSVector *) gammaVector betaVector:(MPSVector *) betaVector resultMatrix:(MPSMatrix *) resultMatrix;
```
