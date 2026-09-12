> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct)

# MLActionClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 11.0+

Parameters that affect the training process of an action classifier.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating action classifier parameters

- [init(validation:batchSize:maximumIterations:predictionWindowSize:augmentationOptions:algorithm:targetFrameRate:)](modelparameters-swift.struct/init%28validation_batchsize_maximumiterations_predictionwindowsize_augmentationoptions_algorithm_targetframerate_%29.md): Creates a new set of training parameters for an action classifier with the validation dataset.

### Accessing the training parameters

- [maximumIterations](modelparameters-swift.struct/maximumiterations.md): The largest number of training iterations the training session can use.
- [batchSize](modelparameters-swift.struct/batchsize.md): The number of videos the training session uses for each of its training iterations.
- [targetFrameRate](modelparameters-swift.struct/targetframerate.md): The number of frames the training session uses per second of video to train an action classifier.
- [predictionWindowSize](modelparameters-swift.struct/predictionwindowsize.md): The number of frames the training session uses to train an action classifier.
- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm the training session uses to train the action classifier.
- [augmentationOptions](modelparameters-swift.struct/augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
- [validation](modelparameters-swift.struct/validation.md): The action classifier’s validation dataset.

### Describing the model parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the model parameters shown in a playground.

### Supporting types

- [MLActionClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata.md): The source of a validation dataset for an action classifier.
- [MLActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): The video augmentations for an action classifier training session.
- [MLActionClassifier.ModelParameters.ModelAlgorithmType](modelparameters-swift.struct/modelalgorithmtype.md): The action classifier training algorithm options.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Supporting types

- [MLActionClassifier.DataSource](datasource.md): A data source for an action classifier.
- [MLActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): The video augmentations for an action classifier training session.
