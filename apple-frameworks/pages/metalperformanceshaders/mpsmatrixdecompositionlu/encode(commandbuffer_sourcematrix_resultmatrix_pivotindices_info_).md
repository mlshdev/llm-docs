> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdecompositionlu/encode(commandbuffer:sourcematrix:resultmatrix:pivotindices:info:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositionlu/encode(commandbuffer:sourcematrix:resultmatrix:pivotindices:info:))

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
