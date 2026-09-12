> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer)

# MPSRNNMatrixInferenceLayer (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A recurrent neural network layer for inference on Metal Performance Shaders matrices.

## Declaration

```swift
class MPSRNNMatrixInferenceLayer
```

<a id="overview"></a>

## Overview

The [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) specifies a recurrent neural network layer for inference on [MPSMatrix](mpsmatrix.md) objects. Two types of recurrent layers are supported:

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)—Operates with convolutions on images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)—Operates on matrices.

You can use [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) to implement the latter by using 1 x 1 images, but due to image size restrictions and performance, [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is the better choice for linear recurrent layers.

[MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is initialized using either of the following:

- A single [MPSRNNDescriptor](mpsrnndescriptor.md) instance, which further specifies the recurrent network layer.
- An array of [MPSRNNDescriptor](mpsrnndescriptor.md) instances, which specifies a stack of recurrent layers that can operate in parallel a subset of the inputs in a sequence of inputs and recurrent outputs.

Stacks with bidirectionally traversing encode functions don’t support starting from a previous set of recurrent states. However, you can achieve this effect by defining two separate unidirectional stacks of layers, running the same input sequence on them separately (one forward and one backward), and ultimately combining the two result sequences.

## Topics

### Initializers

- [init(coder:device:)](mpsrnnmatrixinferencelayer/init%28coder_device_%29.md)
- [init(device:rnnDescriptor:)](mpsrnnmatrixinferencelayer/init%28device_rnndescriptor_%29.md)
- [init(device:rnnDescriptors:)](mpsrnnmatrixinferencelayer/init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](mpsrnndescriptor.md): A description of a recursive neural network block or layer.

### Instance Properties

- [bidirectionalCombineMode](mpsrnnmatrixinferencelayer/bidirectionalcombinemode.md)
- [MPSRNNBidirectionalCombineMode](mpsrnnbidirectionalcombinemode.md): Modes that define how two images or matrices are combined.
- [inputFeatureChannels](mpsrnnmatrixinferencelayer/inputfeaturechannels.md)
- [numberOfLayers](mpsrnnmatrixinferencelayer/numberoflayers.md)
- [outputFeatureChannels](mpsrnnmatrixinferencelayer/outputfeaturechannels.md)
- [recurrentOutputIsTemporary](mpsrnnmatrixinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnmatrixinferencelayer/storeallintermediatestates.md)

### Instance Methods

- [copy(with:device:)](mpsrnnmatrixinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequence(commandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:)](mpsrnnmatrixinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequence(commandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:)](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:)](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

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

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSRNNMatrixInferenceLayer (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A recurrent neural network layer for inference on Metal Performance Shaders matrices.

## Declaration

```objectivec
@interface MPSRNNMatrixInferenceLayer : MPSKernel
```

<a id="overview"></a>

## Overview

The [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) specifies a recurrent neural network layer for inference on [MPSMatrix](mpsmatrix.md) objects. Two types of recurrent layers are supported:

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md)—Operates with convolutions on images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)—Operates on matrices.

You can use [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md) to implement the latter by using 1 x 1 images, but due to image size restrictions and performance, [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is the better choice for linear recurrent layers.

[MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md) is initialized using either of the following:

- A single [MPSRNNDescriptor](mpsrnndescriptor.md) instance, which further specifies the recurrent network layer.
- An array of [MPSRNNDescriptor](mpsrnndescriptor.md) instances, which specifies a stack of recurrent layers that can operate in parallel a subset of the inputs in a sequence of inputs and recurrent outputs.

Stacks with bidirectionally traversing encode functions don’t support starting from a previous set of recurrent states. However, you can achieve this effect by defining two separate unidirectional stacks of layers, running the same input sequence on them separately (one forward and one backward), and ultimately combining the two result sequences.

## Topics

### Initializers

- [initWithCoder:device:](mpsrnnmatrixinferencelayer/init%28coder_device_%29.md)
- [initWithDevice:rnnDescriptor:](mpsrnnmatrixinferencelayer/init%28device_rnndescriptor_%29.md)
- [initWithDevice:rnnDescriptors:](mpsrnnmatrixinferencelayer/init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](mpsrnndescriptor.md): A description of a recursive neural network block or layer.

### Instance Properties

- [bidirectionalCombineMode](mpsrnnmatrixinferencelayer/bidirectionalcombinemode.md)
- [MPSRNNBidirectionalCombineMode](mpsrnnbidirectionalcombinemode.md): Modes that define how two images or matrices are combined.
- [inputFeatureChannels](mpsrnnmatrixinferencelayer/inputfeaturechannels.md)
- [numberOfLayers](mpsrnnmatrixinferencelayer/numberoflayers.md)
- [outputFeatureChannels](mpsrnnmatrixinferencelayer/outputfeaturechannels.md)
- [recurrentOutputIsTemporary](mpsrnnmatrixinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnmatrixinferencelayer/storeallintermediatestates.md)

### Instance Methods

- [copyWithZone:device:](mpsrnnmatrixinferencelayer/copy%28with_device_%29.md)
- [encodeBidirectionalSequenceToCommandBuffer:sourceSequence:destinationForwardMatrices:destinationBackwardMatrices:](mpsrnnmatrixinferencelayer/encodebidirectionalsequence%28commandbuffer_sourcesequence_destinationforwardmatrices_destinationbackwardmatrices_%29.md)
- [encodeSequenceToCommandBuffer:sourceMatrices:destinationMatrices:recurrentInputState:recurrentOutputStates:](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_destinationmatrices_recurrentinputstate_recurrentoutputstates_%29.md)
- [MPSRNNRecurrentMatrixState](mpsrnnrecurrentmatrixstate.md): A class holds all the data that’s passed from one sequence iteration of the matrix-based recurrent neural network layer to the next.
- [encodeSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:recurrentInputState:recurrentOutputStates:](mpsrnnmatrixinferencelayer/encodesequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_recurrentinputstate_recurrentoutputstates_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
