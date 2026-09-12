> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnimageinferencelayer](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnimageinferencelayer)

# MPSRNNImageInferenceLayer (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A recurrent neural network layer for inference on Metal Performance Shaders images.

## Declaration

```swift
class MPSRNNImageInferenceLayer
```

<a id="overview"></a>

## Overview

The [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) specifies a recurrent neural network layer for inference on [MPSImage](mpsimage.md) objects. Two types of recurrent layers are supported:

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)—Operates with convolutions on images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)—Operates on matrices.

You can use [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) to implement the latter by using 1 x 1 images, but due to image size restrictions and performance, [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is the better choice for linear recurrent layers.

[MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) is initialized using either of the following:

- A single [MPSRNNDescriptor](mpsrnndescriptor.md) instance, which further specifies the recurrent network layer.
- An array of [MPSRNNDescriptor](mpsrnndescriptor.md) instances, which specifies a stack of recurrent layers that can operate in parallel a subset of the inputs in a sequence of inputs and recurrent outputs.

Stacks with bidirectionally traversing encode functions don’t support starting from a previous set of recurrent states. However, you can achieve this effect by defining two separate unidirectional stacks of layers, running the same input sequence on them separately (one forward and one backward), and ultimately combining the two result sequences.

## Topics

### Initializers

- [init(coder:device:)](mpsrnnimageinferencelayer/init%28coder_device_%29.md)
- [init(device:rnnDescriptor:)](mpsrnnimageinferencelayer/init%28device_rnndescriptor_%29.md)
- [init(device:rnnDescriptors:)](mpsrnnimageinferencelayer/init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](mpsrnndescriptor.md): A description of a recursive neural network block or layer.

### Instance Properties

- [bidirectionalCombineMode](mpsrnnimageinferencelayer/bidirectionalcombinemode.md)
- [MPSRNNBidirectionalCombineMode](mpsrnnbidirectionalcombinemode.md): Modes that define how two images or matrices are combined.
- [numberOfLayers](mpsrnnimageinferencelayer/numberoflayers.md)
- [recurrentOutputIsTemporary](mpsrnnimageinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnimageinferencelayer/storeallintermediatestates.md)
- [inputFeatureChannels](mpsrnnimageinferencelayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnimageinferencelayer/outputfeaturechannels.md)

### Instance Methods

- [copy(with:device:)](mpsrnnimageinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:)](mpsrnnimageinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequence(commandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:)](mpsrnnimageinferencelayer/encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSRNNImageInferenceLayer (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A recurrent neural network layer for inference on Metal Performance Shaders images.

## Declaration

```objectivec
@interface MPSRNNImageInferenceLayer : MPSCNNKernel
```

<a id="overview"></a>

## Overview

The [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) specifies a recurrent neural network layer for inference on [MPSImage](mpsimage.md) objects. Two types of recurrent layers are supported:

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)—Operates with convolutions on images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)—Operates on matrices.

You can use [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) to implement the latter by using 1 x 1 images, but due to image size restrictions and performance, [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is the better choice for linear recurrent layers.

[MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) is initialized using either of the following:

- A single [MPSRNNDescriptor](mpsrnndescriptor.md) instance, which further specifies the recurrent network layer.
- An array of [MPSRNNDescriptor](mpsrnndescriptor.md) instances, which specifies a stack of recurrent layers that can operate in parallel a subset of the inputs in a sequence of inputs and recurrent outputs.

Stacks with bidirectionally traversing encode functions don’t support starting from a previous set of recurrent states. However, you can achieve this effect by defining two separate unidirectional stacks of layers, running the same input sequence on them separately (one forward and one backward), and ultimately combining the two result sequences.

## Topics

### Initializers

- [initWithCoder:device:](mpsrnnimageinferencelayer/init%28coder_device_%29.md)
- [initWithDevice:rnnDescriptor:](mpsrnnimageinferencelayer/init%28device_rnndescriptor_%29.md)
- [initWithDevice:rnnDescriptors:](mpsrnnimageinferencelayer/init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](mpsrnndescriptor.md): A description of a recursive neural network block or layer.

### Instance Properties

- [bidirectionalCombineMode](mpsrnnimageinferencelayer/bidirectionalcombinemode.md)
- [MPSRNNBidirectionalCombineMode](mpsrnnbidirectionalcombinemode.md): Modes that define how two images or matrices are combined.
- [numberOfLayers](mpsrnnimageinferencelayer/numberoflayers.md)
- [recurrentOutputIsTemporary](mpsrnnimageinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnimageinferencelayer/storeallintermediatestates.md)
- [inputFeatureChannels](mpsrnnimageinferencelayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnimageinferencelayer/outputfeaturechannels.md)

### Instance Methods

- [copyWithZone:device:](mpsrnnimageinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardImages:destinationBackwardImages:](mpsrnnimageinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardimages_destinationbackwardimages_%29.md)
- [encodeSequenceToCommandBuffer:sourceImages:destinationImages:recurrentInputState:recurrentOutputStates:](mpsrnnimageinferencelayer/encodesequence%28commandbuffer_sourceimages_destinationimages_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentImageState](mpsrnnrecurrentimagestate.md): A class that holds all the data that’s passed from one sequence iteration of the image-based recurrent neural network layer (stack) to the next.

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
