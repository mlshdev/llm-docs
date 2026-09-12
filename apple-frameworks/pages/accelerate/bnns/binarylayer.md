> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/binarylayer](https://developer.apple.com/documentation/accelerate/bnns/binarylayer)

# BNNS.BinaryLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The base class for layers that accept two inputs.

> Use the BNNSGraph API instead.

## Declaration

```swift
class BinaryLayer
```

## Topics

### Applying a Binary Layer

- [apply(batchSize:inputA:inputB:output:)](binarylayer/apply%28batchsize_inputa_inputb_output_%29.md): Deprecated. Applies the layer to a set of input object pairs, writing the result to a set of output objects.
- [applyBackward(batchSize:inputA:inputB:output:outputGradient:generatingInputAGradient:generatingInputBGradient:)](binarylayer/applybackward%28batchsize_inputa_inputb_output_outputgradient_generatinginputagradient_generatinginputbgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.Layer](layer.md)

## See Also

### Base Classes

- [BNNS.Layer](layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](unarylayer.md): Deprecated. The base class for layers that accept a single input.
