> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier](https://developer.apple.com/documentation/createml/mlhandposeclassifier)

# MLHandPoseClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A task that creates a hand pose classification model by training with images of people’s hands that you provide.

## Declaration

```swift
struct MLHandPoseClassifier
```

## Topics

### Training a hand pose classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](mlhandposeclassifier/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous hand pose classifier’s training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlhandposeclassifier/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous hand pose classifier’s training session.
- [resume(\_:)](mlhandposeclassifier/resume%28__%29.md): Begins or continues an asynchronous hand pose classifier’s training session.
- [restoreTrainingSession(sessionParameters:)](mlhandposeclassifier/restoretrainingsession%28sessionparameters_%29.md): Recreates an asynchronous hand pose classifier’s training session by restoring its saved state from the file system.

### Creating a hand pose classifier from a checkpoint

- [init(checkpoint:)](mlhandposeclassifier/init%28checkpoint_%29.md): Creates a hand pose classifier from a training session checkpoint.

### Training a hand pose classifier synchronously

- [init(trainingData:parameters:)](mlhandposeclassifier/init%28trainingdata_parameters_%29.md): Creates a hand pose classifier by starting a synchronous training session.

### Evaluating a hand pose classifier

- [evaluation(on:)](mlhandposeclassifier/evaluation%28on_%29.md): Generates metrics that describe the hand pose classifier’s performance with a dataset of labeled images.
- [trainingMetrics](mlhandposeclassifier/trainingmetrics.md): Measurements of the hand pose classifier’s performance on the training dataset.
- [validationMetrics](mlhandposeclassifier/validationmetrics.md): Measurements of the hand pose classifier’s performance on the validation dataset.

### Testing a hand pose classifier

- [prediction(from:)](mlhandposeclassifier/prediction%28from_%29.md): Generates a hand pose prediction for an image.
- [predictions(from:)](mlhandposeclassifier/predictions%28from_%29.md): Generates an array of hand pose predictions for each image in a URL array.

### Saving a hand pose classifier

- [write(to:metadata:)](mlhandposeclassifier/write%28to_metadata_%29.md): Exports the hand pose classifier as a CoreML model file.
- [write(toFile:metadata:)](mlhandposeclassifier/write%28tofile_metadata_%29.md): Exports the hand pose classifier as a Core ML model file.

### Inspecting a hand pose classifier model

- [model](mlhandposeclassifier/model.md): The underlying Core ML model of the hand pose classifier stored in memory.
- [modelParameters](mlhandposeclassifier/modelparameters-swift.property.md): The hand pose model’s configuration parameters.

### Describing a hand pose classifier

- [description](mlhandposeclassifier/description.md): A text representation of the hand pose classifier.
- [debugDescription](mlhandposeclassifier/debugdescription.md): A text representation of the hand pose classifier suitable for debugging.
- [playgroundDescription](mlhandposeclassifier/playgrounddescription.md): A description of the hand pose classifier that’s viewable in a playground.

### Supporting types

- [MLHandPoseClassifier.DataSource](mlhandposeclassifier/datasource.md): A hand pose classifier dataset that contains annotated images or hand joint location data.
- [MLHandPoseClassifier.ModelParameters](mlhandposeclassifier/modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand pose classifier task.
- [MLHandPoseClassifier.ImageAugmentationOptions](mlhandposeclassifier/imageaugmentationoptions.md): Options a hand pose classification training session can use to generate additional training data from the images you provide.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlhandposeclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlhandposeclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlhandposeclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Image models

- [Creating an Image Classifier Model](creating-an-image-classifier-model.md): Train a machine learning model to classify images, and add it to your Core ML app.
- [MLImageClassifier](mlimageclassifier.md): A model you train to classify images.
- [MLObjectDetector](mlobjectdetector.md): A model you train to classify one or more objects within an image.
