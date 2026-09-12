> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/encodeforwardsequence(commandbuffer:sourcematrices:destinationmatrices:trainingstates:weights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/encodeforwardsequence(commandbuffer:sourcematrices:destinationmatrices:trainingstates:weights:))

# encodeForwardSequence(commandBuffer:sourceMatrices:destinationMatrices:trainingStates:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeForwardSequence(commandBuffer: any MTLCommandBuffer, sourceMatrices: [MPSMatrix], destinationMatrices: [MPSMatrix], trainingStates: NSMutableArray, weights: [MPSMatrix])
```

# encodeForwardSequenceToCommandBuffer:sourceMatrices:destinationMatrices:trainingStates:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeForwardSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrices:(NSArray<MPSMatrix *> *) sourceMatrices destinationMatrices:(NSArray<MPSMatrix *> *) destinationMatrices trainingStates:(NSMutableArray<MPSRNNMatrixTrainingState *> *) trainingStates weights:(NSArray<MPSMatrix *> *) weights;
```
