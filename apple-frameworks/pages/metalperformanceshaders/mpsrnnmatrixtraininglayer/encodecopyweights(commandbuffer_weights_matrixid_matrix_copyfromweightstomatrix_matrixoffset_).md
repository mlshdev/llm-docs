> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/encodecopyweights(commandbuffer:weights:matrixid:matrix:copyfromweightstomatrix:matrixoffset:)

# encodeCopyWeights(commandBuffer:weights:matrixId:matrix:copyFromWeightsToMatrix:matrixOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeCopyWeights(commandBuffer: any MTLCommandBuffer, weights: [MPSMatrix], matrixId: MPSRNNMatrixId, matrix: MPSMatrix, copyFromWeightsToMatrix: Bool, matrixOffset: MTLOrigin)
```

# encodeCopyWeightsToCommandBuffer:weights:matrixId:matrix:copyFromWeightsToMatrix:matrixOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeCopyWeightsToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer weights:(NSArray<MPSMatrix *> *) weights matrixId:(MPSRNNMatrixId) matrixId matrix:(MPSMatrix *) matrix copyFromWeightsToMatrix:(BOOL) copyFromWeightsToMatrix matrixOffset:(MTLOrigin) matrixOffset;
```
