> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/modelparameters/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlstyletransfer/modelparameters/modelalgorithmtype)

# MLStyleTransfer.ModelParameters.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The style transfer training algorithm options.

## Declaration

```swift
enum ModelAlgorithmType
```

<a id="overview"></a>

## Overview

This object uses a convolutional neural network for training the style transfer model, giving more detailed style. It’s ideal for cases where latency is not the main concern, such as single images.

## Topics

### Selecting an algorithm type

- [MLStyleTransfer.ModelParameters.ModelAlgorithmType.cnn](modelalgorithmtype/cnn.md): A style-transfer training algorithm that generates a model that prioritizes image quality over speed.
- [MLStyleTransfer.ModelParameters.ModelAlgorithmType.cnnLite](modelalgorithmtype/cnnlite.md): A style-transfer training algorithm that generates a model that prioritizes speed over image quality.

### Describing an algorithm type

- [description](modelalgorithmtype/description.md): A text representation of the model parameters.
- [debugDescription](modelalgorithmtype/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelalgorithmtype/playgrounddescription.md): A description of the model parameters shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelalgorithmtype/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelalgorithmtype/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelalgorithmtype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing parameters

- [MLStyleTransfer.ModelParameters.ValidationData](validationdata.md): The source of a validation dataset for a style transfer model.
