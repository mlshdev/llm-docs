> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnimageinferencelayer/copy(with:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnimageinferencelayer/copy(with:device:))

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

- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:)](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequence(commandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

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

- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequenceToCommandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.
