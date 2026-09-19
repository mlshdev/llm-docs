> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositionlu/encode(commandbuffer:sourcematrix:resultmatrix:pivotindices:info:)

# encode(commandBuffer:sourceMatrix:resultMatrix:pivotIndices:info:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceMatrix: MPSMatrix, resultMatrix: MPSMatrix, pivotIndices: MPSMatrix, info status: (any MTLBuffer)?)
```

# encodeToCommandBuffer:sourceMatrix:resultMatrix:pivotIndices:status: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrix:(MPSMatrix *) sourceMatrix resultMatrix:(MPSMatrix *) resultMatrix pivotIndices:(MPSMatrix *) pivotIndices status:(id<MTLBuffer>) status;
```
