> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixfullyconnected/encode(commandbuffer:inputmatrix:weightmatrix:biasvector:resultmatrix:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfullyconnected/encode(commandbuffer:inputmatrix:weightmatrix:biasvector:resultmatrix:))

# encode(commandBuffer:inputMatrix:weightMatrix:biasVector:resultMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, inputMatrix: MPSMatrix, weightMatrix: MPSMatrix, biasVector: MPSVector?, resultMatrix: MPSMatrix)
```

# encodeToCommandBuffer:inputMatrix:weightMatrix:biasVector:resultMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputMatrix:(MPSMatrix *) inputMatrix weightMatrix:(MPSMatrix *) weightMatrix biasVector:(MPSVector *) biasVector resultMatrix:(MPSMatrix *) resultMatrix;
```
