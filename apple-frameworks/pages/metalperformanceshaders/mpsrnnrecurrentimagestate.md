> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnrecurrentimagestate](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnrecurrentimagestate)

# MPSRNNRecurrentImageState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

## Declaration

```swift
class MPSRNNRecurrentImageState
```

## Topics

### Instance Methods

- [getMemoryCellImage(forLayerIndex:)](mpsrnnrecurrentimagestate/getmemorycellimage%28forlayerindex_%29.md)
- [getRecurrentOutputImage(forLayerIndex:)](mpsrnnrecurrentimagestate/getrecurrentoutputimage%28forlayerindex_%29.md)

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

- [copy(with:device:)](mpsrnnimageinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:)](mpsrnnimageinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequence(commandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:)](mpsrnnimageinferencelayer/encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)

# MPSRNNRecurrentImageState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

## Declaration

```objectivec
@interface MPSRNNRecurrentImageState : MPSState
```

## Topics

### Instance Methods

- [getMemoryCellImageForLayerIndex:](mpsrnnrecurrentimagestate/getmemorycellimage%28forlayerindex_%29.md)
- [getRecurrentOutputImageForLayerIndex:](mpsrnnrecurrentimagestate/getrecurrentoutputimage%28forlayerindex_%29.md)

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

## See Also

### Instance Methods

- [copyWithZone:device:](mpsrnnimageinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:](mpsrnnimageinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequenceToCommandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:](mpsrnnimageinferencelayer/encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
