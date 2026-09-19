> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsolvelu/encode(commandbuffer:sourcematrix:righthandsidematrix:pivotindices:solutionmatrix:)

# encode(commandBuffer:sourceMatrix:rightHandSideMatrix:pivotIndices:solutionMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceMatrix: MPSMatrix, rightHandSideMatrix: MPSMatrix, pivotIndices: MPSMatrix, solutionMatrix: MPSMatrix)
```

# encodeToCommandBuffer:sourceMatrix:rightHandSideMatrix:pivotIndices:solutionMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrix:(MPSMatrix *) sourceMatrix rightHandSideMatrix:(MPSMatrix *) rightHandSideMatrix pivotIndices:(MPSMatrix *) pivotIndices solutionMatrix:(MPSMatrix *) solutionMatrix;
```
