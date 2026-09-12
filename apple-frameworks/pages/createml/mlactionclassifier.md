> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier](https://developer.apple.com/documentation/createml/mlactionclassifier)

# MLActionClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 11.0+

A model you train with videos to classify a person’s body movements.

## Declaration

```swift
struct MLActionClassifier
```

## Topics

### Training an action classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](mlactionclassifier/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous action classifier training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlactionclassifier/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an action classifier.
- [resume(\_:)](mlactionclassifier/resume%28__%29.md): Begins or continues an asynchronous action classifier training session.
- [restoreTrainingSession(sessionParameters:)](mlactionclassifier/restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an action classifier by restoring an existing training session’s state from its parameters.

### Creating an action classifier from a checkpoint

- [init(checkpoint:)](mlactionclassifier/init%28checkpoint_%29.md): Creates an action classifier from a training session checkpoint.

### Training an action classifier synchronously

- [init(trainingData:parameters:)](mlactionclassifier/init%28trainingdata_parameters_%29.md): Creates an action classifier with a training dataset represented by a data source.

### Evaluating an action classifier

- [evaluation(on:)](mlactionclassifier/evaluation%28on_%29.md): Generates metrics describing the action classifier’s performance on labeled videos represented by a data source.
- [trainingMetrics](mlactionclassifier/trainingmetrics.md): Measurements of the action classifier’s performance on the training dataset.
- [validationMetrics](mlactionclassifier/validationmetrics.md): Measurements of the action classifier’s performance on the validation dataset.

### Testing an action classifier

- [prediction(from:)](mlactionclassifier/prediction%28from_%29.md): Generates a prediction for each action the classifier recognizes in the video.
- [predictions(from:)](mlactionclassifier/predictions%28from_%29.md): Generates a sequence of predictions for each video input.
- [MLActionClassifier.Prediction](mlactionclassifier/prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.

### Saving an action classifier

- [write(to:metadata:)](mlactionclassifier/write%28to_metadata_%29.md): Exports the action classifier as a Core ML model file to a location in the file system.
- [write(toFile:metadata:)](mlactionclassifier/write%28tofile_metadata_%29.md): Exports the action classifier as a Core ML model file to the file path.

### Inspecting an action classifier model

- [model](mlactionclassifier/model.md): The underlying Core ML model of the action classifier stored in memory.
- [modelParameters](mlactionclassifier/modelparameters-swift.property.md): The model configuration parameters the action classifier used during its training session.

### Describing an action classifier

- [description](mlactionclassifier/description.md): A text representation of the action classifier.
- [debugDescription](mlactionclassifier/debugdescription.md): A text representation of the action classifier that’s suitable for output during debugging.
- [playgroundDescription](mlactionclassifier/playgrounddescription.md): A description of the action classifier shown in a playground.

### Supporting types

- [MLActionClassifier.DataSource](mlactionclassifier/datasource.md): A data source for an action classifier.
- [MLActionClassifier.ModelParameters](mlactionclassifier/modelparameters-swift.struct.md): Parameters that affect the training process of an action classifier.
- [MLActionClassifier.VideoAugmentationOptions](mlactionclassifier/videoaugmentationoptions.md): The video augmentations for an action classifier training session.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlactionclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlactionclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlactionclassifier/customstringconvertible-implementations.md)

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

### Video models

- [Creating an Action Classifier Model](creating-an-action-classifier-model.md): Train a machine learning model to recognize a person’s body movements.
- [Detecting human actions in a live video feed](detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [MLHandActionClassifier](mlhandactionclassifier.md): A task that creates a hand action classification model by training with videos of people’s hand movements that you provide.
- [MLStyleTransfer](mlstyletransfer.md): A model you train to apply an image’s style to other images or videos.
