> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier](https://developer.apple.com/documentation/createml/mlhandactionclassifier)

# MLHandActionClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A task that creates a hand action classification model by training with videos of people’s hand movements that you provide.

## Declaration

```swift
struct MLHandActionClassifier
```

## Topics

### Training a hand action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](mlhandactionclassifier/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous hand action classifier’s training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlhandactionclassifier/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous hand action classifier’s training session.
- [resume(\_:)](mlhandactionclassifier/resume%28__%29.md): Begins or continues an asynchronous hand action classifier’s training session.
- [restoreTrainingSession(sessionParameters:)](mlhandactionclassifier/restoretrainingsession%28sessionparameters_%29.md): Recreates an asynchronous hand action classifier’s training session by restoring its saved state from the file system.

### Creating a hand action classifier from a checkpoint

- [init(checkpoint:)](mlhandactionclassifier/init%28checkpoint_%29.md): Creates a hand action classifier from a training session checkpoint.

### Training a hand action classifier synchronously

- [init(trainingData:parameters:)](mlhandactionclassifier/init%28trainingdata_parameters_%29.md): Creates a hand action classifier by starting a synchronous training session.

### Evaluating a hand action classifier

- [evaluation(on:)](mlhandactionclassifier/evaluation%28on_%29.md): Generates metrics describing the hand action classifier’s performance on labeled videos.
- [trainingMetrics](mlhandactionclassifier/trainingmetrics.md): Measurements of the hand action classifier’s performance on the training dataset.
- [validationMetrics](mlhandactionclassifier/validationmetrics.md): Measurements of the hand action classifier’s performance on the validation dataset.

### Testing a hand action classifier

- [prediction(from:)](mlhandactionclassifier/prediction%28from_%29.md): Generates an array of hand-action predictions for a video.
- [predictions(from:)](mlhandactionclassifier/predictions%28from_%29.md): Generates an array of hand action predictions for each video in a URL array.
- [MLHandActionClassifier.Prediction](mlhandactionclassifier/prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.

### Saving a hand action classifier

- [write(to:metadata:)](mlhandactionclassifier/write%28to_metadata_%29.md): Exports the hand action classifier as a CoreML model file.
- [write(toFile:metadata:)](mlhandactionclassifier/write%28tofile_metadata_%29.md): Exports the hand action classifier as a Core ML model file.

### Inspecting a hand action classifier model

- [model](mlhandactionclassifier/model.md): The underlying Core ML model of the hand action classifier stored in memory.
- [modelParameters](mlhandactionclassifier/modelparameters-swift.property.md): The hand action model’s configuration parameters.

### Describing a hand action classifier

- [description](mlhandactionclassifier/description.md): A text representation of the hand action classifier.
- [debugDescription](mlhandactionclassifier/debugdescription.md): A text representation of the hand action classifier suitable for debugging.
- [playgroundDescription](mlhandactionclassifier/playgrounddescription.md): A description of the hand action classifier that’s viewable in a playground.

### Supporting types

- [MLHandActionClassifier.DataSource](mlhandactionclassifier/datasource.md): A hand action classifier dataset that contains annotated videos or hand joint location data.
- [MLHandActionClassifier.ModelParameters](mlhandactionclassifier/modelparameters-swift.struct.md): A set of parameters that affect the training process of a hand action classifier task.
- [MLHandActionClassifier.VideoAugmentationOptions](mlhandactionclassifier/videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlhandactionclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlhandactionclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlhandactionclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Video models

- [Creating an Action Classifier Model](creating-an-action-classifier-model.md): Train a machine learning model to recognize a person’s body movements.
- [Detecting human actions in a live video feed](detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [MLActionClassifier](mlactionclassifier.md): A model you train with videos to classify a person’s body movements.
- [MLStyleTransfer](mlstyletransfer.md): A model you train to apply an image’s style to other images or videos.
