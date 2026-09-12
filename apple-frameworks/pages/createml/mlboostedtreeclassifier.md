> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeclassifier](https://developer.apple.com/documentation/createml/mlboostedtreeclassifier)

# MLBoostedTreeClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A classifier based on a collection of decision trees combined with gradient boosting.

## Declaration

```swift
struct MLBoostedTreeClassifier
```

<a id="overview"></a>

## Overview

A boosted tree classifier combines several [MLDecisionTreeClassifier](mldecisiontreeclassifier.md) models (a technique known as *ensemble learning*) by training each model to correct the errors of the preceding model.

This model is useful for handling numerical and categorical features, but is less suitable for sparse data such as text.

## Topics

### Training a boosted tree classifier asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlboostedtreeclassifier/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a boosted tree classifier.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlboostedtreeclassifier/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mlboostedtreeclassifier/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mlboostedtreeclassifier/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a boosted tree classifier from a checkpoint

- [init(checkpoint:)](mlboostedtreeclassifier/init%28checkpoint_%29.md): Creates a boosted tree classifier from a checkpoint.

### Training a boosted tree classifier synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mlboostedtreeclassifier/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a boosted tree classifier.
- [targetColumn](mlboostedtreeclassifier/targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mlboostedtreeclassifier/featurecolumns.md): The names of the columns you selected at initialization to train the classifier.

### Evaluating a boosted tree classifier

- [evaluation(on:)](mlboostedtreeclassifier/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlboostedtreeclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlboostedtreeclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a boosted tree classifier

- [predictions(from:)](mlboostedtreeclassifier/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a boosted tree classifier

- [write(to:metadata:)](mlboostedtreeclassifier/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlboostedtreeclassifier/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a boosted tree classifier

- [model](mlboostedtreeclassifier/model.md): The Core ML model.
- [MLBoostedTreeClassifier.ModelParameters](mlboostedtreeclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mlboostedtreeclassifier/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a boosted tree classifier

- [description](mlboostedtreeclassifier/description.md): A text representation of the boosted tree classifier.
- [debugDescription](mlboostedtreeclassifier/debugdescription.md): A text representation of the boosted tree classifier that’s suitable for output during debugging.
- [playgroundDescription](mlboostedtreeclassifier/playgrounddescription.md): A description of the boosted tree classifier shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlboostedtreeclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlboostedtreeclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlboostedtreeclassifier/customstringconvertible-implementations.md)

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

### Supporting classifier types

- [MLDecisionTreeClassifier](mldecisiontreeclassifier.md): A classifier that predicts the target by creating rules to split the data.
- [MLRandomForestClassifier](mlrandomforestclassifier.md): A classifier based on a collection of decision trees trained on subsets of the data.
- [MLLogisticRegressionClassifier](mllogisticregressionclassifier.md): A classifier that predicts a discrete target value as a function of data features.
- [MLSupportVectorClassifier](mlsupportvectorclassifier.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.
