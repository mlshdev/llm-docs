> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlhandposeclassifier/modelparameters-swift.struct)

# MLHandPoseClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A set of parameters that affect the training process of a hand pose classifier task.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating hand pose model parameters

- [init(validation:batchSize:maximumIterations:augmentationOptions:algorithm:)](modelparameters-swift.struct/init%28validation_batchsize_maximumiterations_augmentationoptions_algorithm_%29.md): Creates a set of training session parameters for a hand pose classifier task.

### Accessing hand pose training parameters

- [maximumIterations](modelparameters-swift.struct/maximumiterations.md): The largest number of training iterations you allow the training session to use.
- [batchSize](modelparameters-swift.struct/batchsize.md): The number of images the model training session uses for each training iteration.
- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm the training session uses to create the hand pose classifier.
- [augmentationOptions](modelparameters-swift.struct/augmentationoptions.md): The variations the training session uses to add more variety to its training dataset.
- [validation](modelparameters-swift.struct/validation.md): A dataset the hand pose classifier task uses to evaluate the model that’s distinct from the training dataset.

### Describing hand pose model parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the hand pose parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the hand pose parameters suitable for debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the hand pose parameters that’s viewable in a playground.

### Parameter supporting types

- [MLHandPoseClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): Options a hand pose classification training session can use to generate additional training data from the images you provide.
- [MLHandPoseClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata.md): A dataset a hand pose classifier task uses to validate the model during a training session.
- [MLHandPoseClassifier.ModelParameters.ModelAlgorithmType](modelparameters-swift.struct/modelalgorithmtype.md): The hand pose classifier training algorithm options.

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

- [MLHandPoseClassifier.DataSource](datasource.md): A hand pose classifier dataset that contains annotated images or hand joint location data.
- [MLHandPoseClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): Options a hand pose classification training session can use to generate additional training data from the images you provide.
