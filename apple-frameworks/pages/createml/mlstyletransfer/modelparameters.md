> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/modelparameters](https://developer.apple.com/documentation/createml/mlstyletransfer/modelparameters)

# MLStyleTransfer.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Parameters that affect the training process of a style transfer model.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(algorithm:validation:maxIterations:textelDensity:styleStrength:)](modelparameters/init%28algorithm_validation_maxiterations_texteldensity_stylestrength_%29.md): Creates a new set of training parameters for a style transfer model.

### Setting style transfer parameters

- [algorithm](modelparameters/algorithm.md): The style transfer task’s training algorithm that prioritizes either speed or quality.
- [debugDescription](modelparameters/debugdescription.md): A text representation of the style transfer model parameters that’s suitable for output during debugging.
- [description](modelparameters/description.md): A text representation of the style transfer model parameters.
- [maxIterations](modelparameters/maxiterations.md): The largest number of iterations the style transfer model can use during training.
- [playgroundDescription](modelparameters/playgrounddescription.md): A description of the style transfer model parameters shown in a playground.
- [styleStrength](modelparameters/stylestrength.md): The amount of influence the input style image has in the stylized image output.
- [textelDensity](modelparameters/texteldensity.md): The amount of detail the task applies from the input style image to the stylized image output.
- [validation](modelparameters/validation.md): The style transfer model’s validation dataset.

### Describing parameters

- [MLStyleTransfer.ModelParameters.ModelAlgorithmType](modelparameters/modelalgorithmtype.md): The style transfer training algorithm options.
- [MLStyleTransfer.ModelParameters.ValidationData](modelparameters/validationdata.md): The source of a validation dataset for a style transfer model.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLStyleTransfer.DataSource](datasource.md): A data source for a style transfer model.
