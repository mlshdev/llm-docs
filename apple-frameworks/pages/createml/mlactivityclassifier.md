> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier](https://developer.apple.com/documentation/createml/mlactivityclassifier)

# MLActivityClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

A model you train to classify motion sensor data.

## Declaration

```swift
struct MLActivityClassifier
```

<a id="overview"></a>

## Overview

An activity classifier is a machine-learning model that your app can use to categorize user *activities*, based on the motion of the user’s device.

You create an activity classifier by gathering a training dataset of a device’s motion sensors, such as the accelerometer and gyroscope on an Apple Watch. For example, you can create an activity classifier that recognizes a person waving, shaking hands, or throwing a ball by gathering the motion-sensor data from people performing those activities.

Evaluate your trained activity classifier by calling [evaluation(on:featureColumns:labelColumn:recordingFileColumn:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/evaluation%28on:featurecolumns:labelcolumn:recordingfilecolumn:%29-1ib5p) [evaluation(on:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/evaluation%28on:%29-7fmux) with a dataset that’s completely distinct from the training and validation datasets. Inspect the metrics the method returns and decide whether the activity classifier performs with enough accuracy. For example, you can assess how often the activity classifier confuses a person waving for shaking hands, or vice versa. If the classifier makes too many mistakes, you can train another classifier with different parameters, or with a training dataset that has more or better motion-sensor examples.

When you’re satisfied with an activity classifier, save it as a Core ML model file, and add it to your Xcode project. Use it to predict the user’s activity based on the motion-sensor data your app captures from the user’s device.

## Topics

### Training an activity classifier asynchronously

- [train(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](mlactivityclassifier/train%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Begins an asynchronous activity classifier training session with a training dataset represented by a data source.
- [makeTrainingSession(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:sessionParameters:)](mlactivityclassifier/maketrainingsession%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier.
- [resume(\_:)](mlactivityclassifier/resume%28__%29.md): Begins or continues an asynchronous activity classifier training session.
- [restoreTrainingSession(sessionParameters:)](mlactivityclassifier/restoretrainingsession%28sessionparameters_%29.md): Creates an asynchronous training session for an activity classifier by restoring an existing training session’s state from its parameters.

### Creating an activity classifier from a checkpoint

- [init(checkpoint:)](mlactivityclassifier/init%28checkpoint_%29.md): Creates an activity classifier from a training session checkpoint.

### Training an activity classifier synchronously

- [init(trainingData:featureColumns:labelColumn:recordingFileColumn:parameters:)](mlactivityclassifier/init%28trainingdata_featurecolumns_labelcolumn_recordingfilecolumn_parameters_%29.md): Creates an activity classifier with a training dataset represented by a data source.

### Evaluating an activity classifier

- [evaluation(on:featureColumns:labelColumn:recordingFileColumn:)](mlactivityclassifier/evaluation%28on_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Generates metrics describing the activity classifier’s performance on labeled activities in a data source.
- [trainingMetrics](mlactivityclassifier/trainingmetrics.md): Measurements of the activity classifier’s performance on the training dataset.
- [validationMetrics](mlactivityclassifier/validationmetrics.md): Measurements of the activity classifier’s performance on the validation dataset.
- [evaluation(on:featureColumns:labelColumn:recordingFileColumn:)](mlactivityclassifier/evaluation%28on_featurecolumns_labelcolumn_recordingfilecolumn_%29.md): Generates metrics describing the activity classifier’s performance on labeled activities in a data source.

### Testing an activity classifier

- [predictions(from:perWindowPrediction:)](mlactivityclassifier/predictions%28from_perwindowprediction_%29.md): Predict activities from new observations.

### Saving an activity classifier

- [write(to:metadata:)](mlactivityclassifier/write%28to_metadata_%29.md): Exports the activity classifier as a Core ML model file.
- [write(toFile:metadata:)](mlactivityclassifier/write%28tofile_metadata_%29.md): Exports the activity classifier as a Core ML model file.

### Inspecting an activity classifier model

- [model](mlactivityclassifier/model.md): The underlying Core ML model of the activity classifier stored in memory.
- [modelParameters](mlactivityclassifier/modelparameters-swift.property.md): The model configuration parameters the activity classifier used during its training session.
- [featureColumns](mlactivityclassifier/featurecolumns.md): The names of the feature columns the activity classifier used during its training session.
- [labelColumn](mlactivityclassifier/labelcolumn.md): The name of the label column the activity classifier used during its training session.
- [recordingFileColumn](mlactivityclassifier/recordingfilecolumn.md): The name of the column that contains the data files the activity classifier used during its training session.

### Describing an activity classifier

- [description](mlactivityclassifier/description.md): A text representation of the activity classifier.
- [debugDescription](mlactivityclassifier/debugdescription.md): A text representation of the activity classifier that’s suitable for output during debugging.
- [playgroundDescription](mlactivityclassifier/playgrounddescription.md): A description of the activity classifier shown in a playground.

### Supporting types

- [MLActivityClassifier.DataSource](mlactivityclassifier/datasource.md): A data source for an activity classifier.
- [MLActivityClassifier.ModelParameters](mlactivityclassifier/modelparameters-swift.struct.md): Model training parameters that direct the training process for an activity classifier model.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlactivityclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlactivityclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlactivityclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
