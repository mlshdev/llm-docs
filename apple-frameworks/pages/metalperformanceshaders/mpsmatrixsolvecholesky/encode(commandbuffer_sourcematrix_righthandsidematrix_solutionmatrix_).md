> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsolvecholesky/encode(commandbuffer:sourcematrix:righthandsidematrix:solutionmatrix:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsolvecholesky/encode(commandbuffer:sourcematrix:righthandsidematrix:solutionmatrix:))

# encode(commandBuffer:sourceMatrix:rightHandSideMatrix:solutionMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceMatrix: MPSMatrix, rightHandSideMatrix: MPSMatrix, solutionMatrix: MPSMatrix)
```

# encodeToCommandBuffer:sourceMatrix:rightHandSideMatrix:solutionMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrix:(MPSMatrix *) sourceMatrix rightHandSideMatrix:(MPSMatrix *) rightHandSideMatrix solutionMatrix:(MPSMatrix *) solutionMatrix;
```
