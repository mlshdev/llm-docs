> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer](https://developer.apple.com/documentation/createml/mlstyletransfer)

# MLStyleTransfer

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

A model you train to apply an image’s style to other images or videos.

## Declaration

```swift
struct MLStyleTransfer
```

## Topics

### Training a style transfer model asynchronously

- [train(trainingData:parameters:sessionParameters:)](mlstyletransfer/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous style transfer model-training session.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlstyletransfer/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for a style transfer model.
- [resume(\_:)](mlstyletransfer/resume%28__%29.md): Begins or continues an asynchronous style transfer model-training session.
- [restoreTrainingSession(sessionParameters:)](mlstyletransfer/restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for a style transfer model by restoring an existing training session’s state from its parameters.

### Creating a style transfer model from a checkpoint

- [init(checkpoint:)](mlstyletransfer/init%28checkpoint_%29.md): Creates a style transfer model from a training session checkpoint.

### Training a style transfer model synchronously

- [init(trainingData:parameters:)](mlstyletransfer/init%28trainingdata_parameters_%29.md): Creates a style transfer model with a training dataset represented by a data source.

### Stylizing an image

- [stylize(image:)](mlstyletransfer/stylize%28image_%29.md): Applies the style the model learned to an image.

### Saving a style transfer model

- [write(to:metadata:)](mlstyletransfer/write%28to_metadata_%29.md): Exports the style transfer model as a Core ML model file to a location in the file system.
- [write(toFile:metadata:)](mlstyletransfer/write%28tofile_metadata_%29.md): Exports the style transfer model as a Core ML model file to the file path.

### Downloading model assets

- [downloadAssets()](mlstyletransfer/downloadassets%28%29.md): Initiates a download of the mlmodel assets required for Style Transfer training. This will be performed automatically if needed at training time, but can be run independently prior to training.

### Describing a style transfer model

- [description](mlstyletransfer/description.md): A text representation of the style transfer model.
- [debugDescription](mlstyletransfer/debugdescription.md): A text representation of the style transfer model that’s suitable for output during debugging.
- [playgroundDescription](mlstyletransfer/playgrounddescription.md): A description of the style transfer model shown in a playground.

### Supporting types

- [MLStyleTransfer.DataSource](mlstyletransfer/datasource.md): A data source for a style transfer model.
- [MLStyleTransfer.ModelParameters](mlstyletransfer/modelparameters.md): Parameters that affect the training process of a style transfer model.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlstyletransfer/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlstyletransfer/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlstyletransfer/customstringconvertible-implementations.md)

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
- [MLActionClassifier](mlactionclassifier.md): A model you train with videos to classify a person’s body movements.
- [MLHandActionClassifier](mlhandactionclassifier.md): A task that creates a hand action classification model by training with videos of people’s hand movements that you provide.
