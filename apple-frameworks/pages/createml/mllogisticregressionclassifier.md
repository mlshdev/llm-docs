> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllogisticregressionclassifier](https://developer.apple.com/documentation/createml/mllogisticregressionclassifier)

# MLLogisticRegressionClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A classifier that predicts a discrete target value as a function of data features.

## Declaration

```swift
struct MLLogisticRegressionClassifier
```

## Topics

### Training a logistic regression classifier asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mllogisticregressionclassifier/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a logistic regression classifier.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mllogisticregressionclassifier/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mllogisticregressionclassifier/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mllogisticregressionclassifier/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a logistic regression classifier from a checkpoint

- [init(checkpoint:)](mllogisticregressionclassifier/init%28checkpoint_%29.md): Creates a logistic regression classifier from a checkpoint.

### Training a logistic regression classifier synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mllogisticregressionclassifier/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a logistic regression classifier.
- [targetColumn](mllogisticregressionclassifier/targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mllogisticregressionclassifier/featurecolumns.md): The names of the columns you selected at initialization to train the classifier.

### Evaluating a logistic regression classifier

- [evaluation(on:)](mllogisticregressionclassifier/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mllogisticregressionclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mllogisticregressionclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a logistic regression classifier

- [predictions(from:)](mllogisticregressionclassifier/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a logistic regression classifier

- [write(to:metadata:)](mllogisticregressionclassifier/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mllogisticregressionclassifier/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a boosted tree classifier

- [model](mllogisticregressionclassifier/model.md): The Core ML model.
- [MLLogisticRegressionClassifier.ModelParameters](mllogisticregressionclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mllogisticregressionclassifier/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a logistic regression classifier

- [description](mllogisticregressionclassifier/description.md): A text representation of the logistic regression classifier.
- [debugDescription](mllogisticregressionclassifier/debugdescription.md): A text representation of the logistic regression classifier that’s suitable for output during debugging.
- [playgroundDescription](mllogisticregressionclassifier/playgrounddescription.md): A description of the logistic regression classifier shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mllogisticregressionclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mllogisticregressionclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mllogisticregressionclassifier/customstringconvertible-implementations.md)

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
- [MLBoostedTreeClassifier](mlboostedtreeclassifier.md): A classifier based on a collection of decision trees combined with gradient boosting.
- [MLSupportVectorClassifier](mlsupportvectorclassifier.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.
