> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsoftmaxgradient/encode(to:gradientmatrix:forwardoutputmatrix:resultmatrix:)

# encode(to:gradientMatrix:forwardOutputMatrix:resultMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, gradientMatrix: MPSMatrix, forwardOutputMatrix: MPSMatrix, resultMatrix: MPSMatrix)
```

# encodeToCommandBuffer:gradientMatrix:forwardOutputMatrix:resultMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer gradientMatrix:(MPSMatrix *) gradientMatrix forwardOutputMatrix:(MPSMatrix *) forwardOutputMatrix resultMatrix:(MPSMatrix *) resultMatrix;
```
