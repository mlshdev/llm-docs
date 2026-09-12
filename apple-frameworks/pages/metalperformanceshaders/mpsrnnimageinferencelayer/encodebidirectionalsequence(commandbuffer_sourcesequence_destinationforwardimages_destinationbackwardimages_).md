> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnimageinferencelayer/encodebidirectionalsequence(commandbuffer:sourcesequence:destinationforwardimages:destinationbackwardimages:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnimageinferencelayer/encodebidirectionalsequence(commandbuffer:sourcesequence:destinationforwardimages:destinationbackwardimages:))

# encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBidirectionalSequence(commandBuffer: any MTLCommandBuffer, sourceSequence: [MPSImage], destinationForwardImages: [MPSImage], destinationBackwardImages: [MPSImage]?)
```

## See Also

### Instance Methods

- [copy(with:device:)](copy%28with_device_%29.md)
- [encodeSequence(commandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:)](encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

# encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBidirectionalSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceSequence:(NSArray<MPSImage *> *) sourceSequence destinationForwardImages:(NSArray<MPSImage *> *) destinationForwardImages destinationBackwardImages:(NSArray<MPSImage *> *) destinationBackwardImages;
```

## See Also

### Instance Methods

- [copyWithZone:device:](copy%28with_device_%29.md)
- [encodeSequenceToCommandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:](encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.
