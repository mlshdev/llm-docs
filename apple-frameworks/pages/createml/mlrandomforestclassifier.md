> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestclassifier](https://developer.apple.com/documentation/createml/mlrandomforestclassifier)

# MLRandomForestClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A classifier based on a collection of decision trees trained on subsets of the data.

## Declaration

```swift
struct MLRandomForestClassifier
```

## Topics

### Creating a random forest classifier asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlrandomforestclassifier/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a random forest classifier.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlrandomforestclassifier/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mlrandomforestclassifier/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mlrandomforestclassifier/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a random forest classifier from a checkpoint

- [init(checkpoint:)](mlrandomforestclassifier/init%28checkpoint_%29.md): Creates a random forest classifier classifier from a checkpoint.

### Creating a random forest classifier synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mlrandomforestclassifier/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a random forest classifier.
- [targetColumn](mlrandomforestclassifier/targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mlrandomforestclassifier/featurecolumns.md): The names of the columns you selected at initialization to train the classifier.

### Evaluating a random forest classifier

- [evaluation(on:)](mlrandomforestclassifier/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlrandomforestclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlrandomforestclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a random forest classifier

- [predictions(from:)](mlrandomforestclassifier/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a random forest classifier

- [write(to:metadata:)](mlrandomforestclassifier/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlrandomforestclassifier/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a random forest classifier

- [model](mlrandomforestclassifier/model.md): The Core ML model.
- [MLRandomForestClassifier.ModelParameters](mlrandomforestclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mlrandomforestclassifier/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a random forest classifier

- [description](mlrandomforestclassifier/description.md): A text representation of the random forest classifier.
- [debugDescription](mlrandomforestclassifier/debugdescription.md): A text representation of the random forest classifier that’s suitable for output during debugging.
- [playgroundDescription](mlrandomforestclassifier/playgrounddescription.md): A description of the random forest classifier shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlrandomforestclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlrandomforestclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlrandomforestclassifier/customstringconvertible-implementations.md)

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
- [MLBoostedTreeClassifier](mlboostedtreeclassifier.md): A classifier based on a collection of decision trees combined with gradient boosting.
- [MLLogisticRegressionClassifier](mllogisticregressionclassifier.md): A classifier that predicts a discrete target value as a function of data features.
- [MLSupportVectorClassifier](mlsupportvectorclassifier.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.
