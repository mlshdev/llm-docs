> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixfullyconnectedgradient/encodefordata(to:gradientmatrix:weightmatrix:resultgradientfordatamatrix:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixfullyconnectedgradient/encodefordata(to:gradientmatrix:weightmatrix:resultgradientfordatamatrix:))

# encodeForData(to:gradientMatrix:weightMatrix:resultGradientForDataMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeForData(to commandBuffer: any MTLCommandBuffer, gradientMatrix: MPSMatrix, weightMatrix: MPSMatrix, resultGradientForDataMatrix: MPSMatrix)
```

# encodeGradientForDataToCommandBuffer:gradientMatrix:weightMatrix:resultGradientForDataMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeGradientForDataToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer gradientMatrix:(const MPSMatrix *) gradientMatrix weightMatrix:(const MPSMatrix *) weightMatrix resultGradientForDataMatrix:(MPSMatrix *) resultGradientForDataMatrix;
```
