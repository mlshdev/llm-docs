> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnsequencedirection](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnsequencedirection)

# MPSRNNSequenceDirection (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Directions that a sequence of inputs can be processed by a recurrent neural network layer.

## Declaration

```swift
enum MPSRNNSequenceDirection
```

## Topics

### Enumeration Cases

- [MPSRNNSequenceDirection.backward](mpsrnnsequencedirection/backward.md)
- [MPSRNNSequenceDirection.forward](mpsrnnsequencedirection/forward.md)

### Initializers

- [init(rawValue:)](mpsrnnsequencedirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.

# MPSRNNSequenceDirection (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Directions that a sequence of inputs can be processed by a recurrent neural network layer.

## Declaration

```objectivec
enum MPSRNNSequenceDirection : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSRNNSequenceDirectionBackward](mpsrnnsequencedirection/backward.md)
- [MPSRNNSequenceDirectionForward](mpsrnnsequencedirection/forward.md)

## See Also

### Recurrent Neural Networks

- [MPSRNNImageInferenceLayer](mpsrnnimageinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders images.
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md): A recurrent neural network layer for inference on Metal Performance Shaders matrices.
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md): A description of a simple recurrent block or layer.
- [MPSGRUDescriptor](mpsgrudescriptor.md): A description of a gated recurrent unit block or layer.
- [MPSLSTMDescriptor](mpslstmdescriptor.md): A description of a long short-term memory block or layer.
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md): A layer for training recurrent neural networks on Metal Performance Shaders matrices.
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md): A class that holds data from a forward pass to be used in a backward pass.
