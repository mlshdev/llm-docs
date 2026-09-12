> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdecompositioncholesky/encode(commandbuffer:sourcematrix:resultmatrix:status:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdecompositioncholesky/encode(commandbuffer:sourcematrix:resultmatrix:status:))

# encode(commandBuffer:sourceMatrix:resultMatrix:status:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceMatrix: MPSMatrix, resultMatrix: MPSMatrix, status: (any MTLBuffer)?)
```

# encodeToCommandBuffer:sourceMatrix:resultMatrix:status: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrix:(MPSMatrix *) sourceMatrix resultMatrix:(MPSMatrix *) resultMatrix status:(id<MTLBuffer>) status;
```
