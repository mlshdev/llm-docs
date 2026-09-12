> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnrecurrentmatrixstate](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnrecurrentmatrixstate)

# MPSRNNRecurrentMatrixState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.

## Declaration

```swift
class MPSRNNRecurrentMatrixState
```

## Topics

### Instance Methods

- [getMemoryCellMatrix(forLayerIndex:)](mpsrnnrecurrentmatrixstate/getmemorycellmatrix%28forlayerindex_%29.md)
- [getRecurrentOutputMatrix(forLayerIndex:)](mpsrnnrecurrentmatrixstate/getrecurrentoutputmatrix%28forlayerindex_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Instance Methods

- [copy(with:device:)](mpsrnnmatrixinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:)](mpsrnnmatrixinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequence(commandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:)](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [encodeSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:)](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)

# MPSRNNRecurrentMatrixState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.

## Declaration

```objectivec
@interface MPSRNNRecurrentMatrixState : MPSState
```

## Topics

### Instance Methods

- [getMemoryCellMatrixForLayerIndex:](mpsrnnrecurrentmatrixstate/getmemorycellmatrix%28forlayerindex_%29.md)
- [getRecurrentOutputMatrixForLayerIndex:](mpsrnnrecurrentmatrixstate/getrecurrentoutputmatrix%28forlayerindex_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

## See Also

### Instance Methods

- [copyWithZone:device:](mpsrnnmatrixinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:](mpsrnnmatrixinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequenceToCommandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [encodeSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)
