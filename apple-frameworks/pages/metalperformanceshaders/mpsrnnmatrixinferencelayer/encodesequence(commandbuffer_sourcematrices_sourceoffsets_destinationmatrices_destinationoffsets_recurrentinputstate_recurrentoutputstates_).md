> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/encodesequence(commandbuffer:sourcematrices:sourceoffsets:destinationmatrices:destinationoffsets:recurrentinputstate:recurrentoutputstates:)

# encodeSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeSequence(commandBuffer: any MTLCommandBuffer, sourceMatrices: [MPSMatrix], sourceOffsets: UnsafeMutablePointer<Int>?, destinationMatrices: [MPSMatrix], destinationOffsets: UnsafeMutablePointer<Int>?, recurrentInputState: MPSRNNRecurrentMatrixState?, recurrentOutputStates: NSMutableArray?)
```

## See Also

### Instance Methods

- [copy(with:device:)](copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:)](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequence(commandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.

# encodeSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceMatrices:(NSArray<MPSMatrix *> *) sourceMatrices sourceOffsets:(NSUInteger *) sourceOffsets destinationMatrices:(NSArray<MPSMatrix *> *) destinationMatrices destinationOffsets:(NSUInteger *) destinationOffsets recurrentInputState:(MPSRNNRecurrentMatrixState *) recurrentInputState recurrentOutputStates:(NSMutableArray<MPSRNNRecurrentMatrixState *> *) recurrentOutputStates;
```

## See Also

### Instance Methods

- [copyWithZone:device:](copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequenceToCommandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
