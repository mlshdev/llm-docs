> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnimageinferencelayer/encodesequence(commandbuffer:sourceimages:destinationimages:recurrentinputstate:recurrentoutputstates:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnimageinferencelayer/encodesequence(commandbuffer:sourceimages:destinationimages:recurrentinputstate:recurrentoutputstates:))

# encodeSequence(commandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encodeSequence(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], destinationImages: [MPSImage], recurrentInputState: MPSRNNRecurrentImageState?, recurrentOutputStates: NSMutableArray?)
```

## See Also

### Instance Methods

- [copy(with:device:)](copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:)](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

# encodeSequenceToCommandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(NSArray<MPSImage *> *) sourceImages destinationImages:(NSArray<MPSImage *> *) destinationImages recurrentInputState:(MPSRNNRecurrentImageState *) recurrentInputState recurrentOutputStates:(NSMutableArray<MPSRNNRecurrentImageState *> *) recurrentOutputStates;
```

## See Also

### Instance Methods

- [copyWithZone:device:](copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:](encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [MPSRNNRecurrentImageState](../mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.
