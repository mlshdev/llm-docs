> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/copy(with:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/copy(with:device:))

# copy(with:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func copy(with zone: NSZone? = nil, device: (any MTLDevice)?) -> Self
```

## See Also

### Instance Methods

- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:)](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequence(commandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)

# copyWithZone:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) copyWithZone:(NSZone *) zone device:(id<MTLDevice>) device;
```

## See Also

### Instance Methods

- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequenceToCommandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](../mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)
