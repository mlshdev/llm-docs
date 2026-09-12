> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer)

# MPSRNNMatrixTrainingLayer (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A layer for training recurrent neural networks on Metal Performance Shaders matrices.

## Declaration

```swift
class MPSRNNMatrixTrainingLayer
```

## Topics

### Initializers

- [init(coder:device:)](mpsrnnmatrixtraininglayer/init%28coder_device_%29.md)
- [init(device:rnnDescriptor:trainableWeights:)](mpsrnnmatrixtraininglayer/init%28device_rnndescriptor_trainableweights_%29.md)

### Instance Properties

- [accumulateWeightGradients](mpsrnnmatrixtraininglayer/accumulateweightgradients.md)
- [inputFeatureChannels](mpsrnnmatrixtraininglayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnmatrixtraininglayer/outputfeaturechannels.md)
- [recurrentOutputIsTemporary](mpsrnnmatrixtraininglayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnmatrixtraininglayer/storeallintermediatestates.md)
- [trainingStateIsTemporary](mpsrnnmatrixtraininglayer/trainingstateistemporary.md)

### Instance Methods

- [copy(with:device:)](mpsrnnmatrixtraininglayer/copy%28with_device_%29.md)
- [createTemporaryWeightGradientMatrices(\_:dataType:commandBuffer:)](mpsrnnmatrixtraininglayer/createtemporaryweightgradientmatrices%28__datatype_commandbuffer_%29.md)
- [createWeightGradientMatrices(\_:dataType:)](mpsrnnmatrixtraininglayer/createweightgradientmatrices%28__datatype_%29.md)
- [createWeightMatrices(\_:)](mpsrnnmatrixtraininglayer/createweightmatrices%28__%29.md)
- [encodeCopyWeights(commandBuffer:weights:matrixId:matrix:copyFromWeightsToMatrix:matrixOffset:)](mpsrnnmatrixtraininglayer/encodecopyweights%28commandbuffer_weights_matrixid_matrix_copyfromweightstomatrix_matrixoffset_%29.md)
- [encodeForwardSequence(commandBuffer:sourceMatrices:destinationMatrices:trainingStates:weights:)](mpsrnnmatrixtraininglayer/encodeforwardsequence%28commandbuffer_sourcematrices_destinationmatrices_trainingstates_weights_%29.md)
- [encodeForwardSequence(commandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:trainingStates:recurrentInputState:recurrentOutputStates:weights:)](mpsrnnmatrixtraininglayer/encodeforwardsequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_trainingstates_recurrentinputstate_recurrentoutputstates_weights_%29.md)
- [encodeGradientSequence(commandBuffer:forwardSources:forwardSourceOffsets:sourceGradients:sourceOffsets:destinationGradients:destinationOffsets:weightGradients:trainingStates:recurrentInputState:recurrentOutputStates:weights:)](mpsrnnmatrixtraininglayer/encodegradientsequence%28commandbuffer_forwardsources_forwardsourceoffsets_sourcegradients_sourceoffsets_destinationgradients_destinationoffsets_weightgradients_trainingstates_recurr~122c0873.md)
- [encodeGradientSequence(commandBuffer:forwardSources:sourceGradients:destinationGradients:weightGradients:trainingStates:weights:)](mpsrnnmatrixtraininglayer/encodegradientsequence%28commandbuffer_forwardsources_sourcegradients_destinationgradients_weightgradients_trainingstates_weights_%29.md)

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
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSRNNMatrixTrainingLayer (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A layer for training recurrent neural networks on Metal Performance Shaders matrices.

## Declaration

```objectivec
@interface MPSRNNMatrixTrainingLayer : MPSKernel
```

## Topics

### Instance Properties

- [accumulateWeightGradients](mpsrnnmatrixtraininglayer/accumulateweightgradients.md)
- [inputFeatureChannels](mpsrnnmatrixtraininglayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnmatrixtraininglayer/outputfeaturechannels.md)
- [recurrentOutputIsTemporary](mpsrnnmatrixtraininglayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnmatrixtraininglayer/storeallintermediatestates.md)
- [trainingStateIsTemporary](mpsrnnmatrixtraininglayer/trainingstateistemporary.md)

### Instance Methods

- [copyWithZone:device:](mpsrnnmatrixtraininglayer/copy%28with_device_%29.md)
- [createTemporaryWeightGradientMatrices:dataType:commandBuffer:](mpsrnnmatrixtraininglayer/createtemporaryweightgradientmatrices%28__datatype_commandbuffer_%29.md)
- [createWeightGradientMatrices:dataType:](mpsrnnmatrixtraininglayer/createweightgradientmatrices%28__datatype_%29.md)
- [createWeightMatrices:](mpsrnnmatrixtraininglayer/createweightmatrices%28__%29.md)
- [encodeCopyWeightsToCommandBuffer:weights:matrixId:matrix:copyFromWeightsToMatrix:matrixOffset:](mpsrnnmatrixtraininglayer/encodecopyweights%28commandbuffer_weights_matrixid_matrix_copyfromweightstomatrix_matrixoffset_%29.md)
- [encodeForwardSequenceToCommandBuffer:sourceMatrices:destinationMatrices:trainingStates:weights:](mpsrnnmatrixtraininglayer/encodeforwardsequence%28commandbuffer_sourcematrices_destinationmatrices_trainingstates_weights_%29.md)
- [encodeForwardSequenceToCommandBuffer:sourceMatrices:sourceOffsets:destinationMatrices:destinationOffsets:trainingStates:recurrentInputState:recurrentOutputStates:weights:](mpsrnnmatrixtraininglayer/encodeforwardsequence%28commandbuffer_sourcematrices_sourceoffsets_destinationmatrices_destinationoffsets_trainingstates_recurrentinputstate_recurrentoutputstates_weights_%29.md)
- [encodeGradientSequenceToCommandBuffer:forwardSources:forwardSourceOffsets:sourceGradients:sourceGradientOffsets:destinationGradients:destinationOffsets:weightGradients:trainingStates:recurrentInputState:recurrentOutputStates:weights:](mpsrnnmatrixtraininglayer/encodegradientsequence%28commandbuffer_forwardsources_forwardsourceoffsets_sourcegradients_sourceoffsets_destinationgradients_destinationoffsets_weightgradients_trainingstates_recurr~122c0873.md)
- [encodeGradientSequenceToCommandBuffer:forwardSources:sourceGradients:destinationGradients:weightGradients:trainingStates:weights:](mpsrnnmatrixtraininglayer/encodegradientsequence%28commandbuffer_forwardsources_sourcegradients_destinationgradients_weightgradients_trainingstates_weights_%29.md)
- [initWithCoder:device:](mpsrnnmatrixtraininglayer/init%28coder_device_%29.md)
- [initWithDevice:rnnDescriptor:trainableWeights:](mpsrnnmatrixtraininglayer/init%28device_rnndescriptor_trainableweights_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNSequenceDirection](mpsrnnsequencedirection.md): Directions that a sequence of inputs can be processed by a recurrent neural network layer.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
