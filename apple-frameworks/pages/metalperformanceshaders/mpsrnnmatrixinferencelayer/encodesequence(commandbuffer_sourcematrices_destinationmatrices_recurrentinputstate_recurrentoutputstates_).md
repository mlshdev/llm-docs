> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/encodesequence(commandbuffer:sourcematrices:destinationmatrices:recurrentinputstate:recurrentoutputstates:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/encodesequence(commandbuffer:sourcematrices:destinationmatrices:recurrentinputstate:recurrentoutputstates:))

# encodeSequence(commandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encodeSequence(commandBuffer: any MTLCommandBuffer, sourceMatrices: [MPSMatrix], destinationMatrices: [MPSMatrix], recurrentInputState: MPSRNNRecurrentMatrixState?, recurrentOutputStates: NSMutableArray?)
```

## See Also

### Instance Methods

- [copy(with:device:)](copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:)](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)

# encodeSequenceToCommandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrices:(NSArray<MPSMatrix *> *) sourceMatrices destinationMatrices:(NSArray<MPSMatrix *> *) destinationMatrices recurrentInputState:(MPSRNNRecurrentMatrixState *) recurrentInputState recurrentOutputStates:(NSMutableArray<MPSRNNRecurrentMatrixState *> *) recurrentOutputStates;
```

## See Also

### Instance Methods

- [copyWithZone:device:](copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)
