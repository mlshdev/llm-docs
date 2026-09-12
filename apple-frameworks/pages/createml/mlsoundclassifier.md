> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier](https://developer.apple.com/documentation/createml/mlsoundclassifier)

# MLSoundClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

A machine learning model you train with audio files to recognize and identify sounds on a device.

## Declaration

```swift
struct MLSoundClassifier
```

<a id="overview"></a>

## Overview

A sound classifier is a machine learning model that identifies and categorizes sounds in an app. Create a sound classifier by gathering a dataset of audio files and use them to train a model with [MLSoundClassifier](mlsoundclassifier.md).

Assemble an audio dataset by recording or gathering audio files that best represent the sounds you want your app to identify. Additionally, create a *negative class* — a group of related noises the sound classifier might hear but aren’t relevant — by collecting or recording example sounds.

For example, say you’re creating a sound classifier to identify laughter and applause. In addition to gathering audio examples of people laughing and clapping, you can add an additional category for background noise. By adding recordings from various settings, such as theaters and amphitheaters, your sound classifier can distinguish the sounds of interest from environmental noises. In other words, the sound classifier won’t predict “Applause” when there isn’t any. Like any classifier, when you request a prediction, a sound classifier always returns one of the categories it learned from a training dataset.

Gather at least 10 audio examples of each sound category you want the sound classifier to learn, plus at least one negative class for background noise. The audio examples can be in any file format that Core Audio supports, including:

- M4A
- MP3
- AIFF
- WAV

> **Tip**

> Use single-channel audio files with a sample rate of 16 kHz or higher for best results.

Reduce a sound classifier’s bias — which can adversely affect its performance — by gathering audio files that use a consistent bit depth and sample rate.

Train, evaluate, and export your sound classifier by following similar steps to creating any other Create ML model type. For more information about the Create ML training workflow, see:

- [Creating an Image Classifier Model](creating-an-image-classifier-model.md)
- [Creating an Action Classifier Model](creating-an-action-classifier-model.md)

Add the sound classifier’s Core ML model to an Xcode project and use it to create an [SNClassifySoundRequest](../soundanalysis/snclassifysoundrequest.md) at runtime. Your app uses the sound request to identify sounds in an audio file or audio stream by following the steps in the following articles, respectively:

- [Classifying Sounds in an Audio File](../soundanalysis/classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](../soundanalysis/classifying-sounds-in-an-audio-stream.md)

## Topics

### Training a sound classifier asynchronously

- [train(trainingData:parameters:sessionParameters:)](mlsoundclassifier/train%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous sound classifier training session with a training dataset represented by a data source.
- [makeTrainingSession(trainingData:parameters:sessionParameters:)](mlsoundclassifier/maketrainingsession%28trainingdata_parameters_sessionparameters_%29.md): Creates an asynchronous training session for a sound classifier.
- [resume(\_:)](mlsoundclassifier/resume%28__%29.md): Begins or continues an asynchronous training session for a sound classifier.
- [restoreTrainingSession(sessionParameters:)](mlsoundclassifier/restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for a sound classifier by restoring an existing training session’s state from its parameters.
- [extractFeatures(trainingData:parameters:sessionParameters:)](mlsoundclassifier/extractfeatures%28trainingdata_parameters_sessionparameters_%29.md): Begins an asynchronous session that extracts sound features from a data source of sound files.
- [MLSoundClassifier.FeatureExtractionParameters](mlsoundclassifier/featureextractionparameters.md): Parameters that affect the process of extracting sound features from audio files.

### Creating a sound classifier from a checkpoint

- [init(checkpoint:)](mlsoundclassifier/init%28checkpoint_%29.md): Creates a sound classifier from a training session checkpoint.

### Training a sound classifier synchronously

- [init(trainingData:parameters:)](mlsoundclassifier/init%28trainingdata_parameters_%29.md): Creates a sound classifier with a training dataset represented by a data source.

### Evaluating a sound classifier

- [evaluation(on:)](mlsoundclassifier/evaluation%28on_%29.md): Generates metrics by evaluating the sound classifier’s performance on a dataset represented by a data source.
- [trainingMetrics](mlsoundclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlsoundclassifier/validationmetrics.md): Measurements of the image classifier’s performance on the validation dataset.

### Testing a sound classifier

- [predictions(from:)](mlsoundclassifier/predictions%28from_%29.md): Generates predictions for an array of audio files.
- [predictions(from:overlapFactor:predictionTimeWindowSize:)](mlsoundclassifier/predictions%28from_overlapfactor_predictiontimewindowsize_%29.md): Generates predictions that use an overlap factor and time window size for an array of audio files.

### Saving a sound classifier

- [write(to:metadata:)](mlsoundclassifier/write%28to_metadata_%29.md): Exports the sound classifier as a model file to a location in the file system.
- [write(toFile:metadata:)](mlsoundclassifier/write%28tofile_metadata_%29.md): Exports the sound classifier as a model file to a path in the file system.

### Inspecting a sound classifier model

- [model](mlsoundclassifier/model.md): The underlying model instance of the sound classifier stored in memory.
- [modelParameters](mlsoundclassifier/modelparameters-swift.property.md): The model configuration parameters the sound classifier used during its training session.

### Describing a sound classifier

- [description](mlsoundclassifier/description.md): A text representation of the sound classifier.
- [debugDescription](mlsoundclassifier/debugdescription.md): A text representation of the sound classifier that’s suitable for output during debugging.
- [playgroundDescription](mlsoundclassifier/playgrounddescription.md): A description of the sound classifier in a playground.

### Supporting types

- [MLSoundClassifier.DataSource](mlsoundclassifier/datasource.md): A representation of a sound-classifier dataset located in the file system or in a data table.
- [MLSoundClassifier.ModelParameters](mlsoundclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training a sound-classifier model.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlsoundclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlsoundclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlsoundclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
