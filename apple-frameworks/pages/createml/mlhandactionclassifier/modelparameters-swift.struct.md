> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct)

# MLHandActionClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A set of parameters that affect the training process of a hand action classifier task.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating hand action model parameters

- [init(validation:batchSize:maximumIterations:predictionWindowSize:augmentationOptions:algorithm:targetFrameRate:)](modelparameters-swift.struct/init%28validation_batchsize_maximumiterations_predictionwindowsize_augmentationoptions_algorithm_targetframerate_%29.md): Creates a set of training session parameters for a hand action classifier task.

### Accessing hand action training parameters

- [maximumIterations](modelparameters-swift.struct/maximumiterations.md): The largest number of training iterations you allow the training session to use.
- [batchSize](modelparameters-swift.struct/batchsize.md): The number of videos the model training session uses for each training iteration.
- [targetFrameRate](modelparameters-swift.struct/targetframerate.md): The number of video frames per second the hand action classifier model expects as its input at runtime.
- [predictionWindowSize](modelparameters-swift.struct/predictionwindowsize.md): The number of video frames the model training session uses to train a hand action classifier.
- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm the training session uses to create the hand action classifier.
- [augmentationOptions](modelparameters-swift.struct/augmentationoptions.md): The variations the training session uses to add more variety to its training dataset.
- [validation](modelparameters-swift.struct/validation.md): A dataset the hand action classifier task uses to evaluate the model that’s distinct from the training dataset.

### Describing hand action model parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the hand action parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the hand action parameters suitable for debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the hand action parameters that’s viewable in a playground.

### Parameter supporting types

- [MLHandActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.
- [MLHandActionClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata.md): A dataset a hand action classifier task uses to validate the model during a training session.
- [MLHandActionClassifier.ModelParameters.ModelAlgorithmType](modelparameters-swift.struct/modelalgorithmtype.md): The hand action classifier training algorithm options.

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

- [MLHandActionClassifier.DataSource](datasource.md): A hand action classifier dataset that contains annotated videos or hand joint location data.
- [MLHandActionClassifier.VideoAugmentationOptions](videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.
