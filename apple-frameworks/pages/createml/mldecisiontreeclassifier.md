> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier)

# MLDecisionTreeClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A classifier that predicts the target by creating rules to split the data.

## Declaration

```swift
struct MLDecisionTreeClassifier
```

## Topics

### Training a decision tree classifier asynchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mldecisiontreeclassifier/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a decision tree classifier.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mldecisiontreeclassifier/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mldecisiontreeclassifier/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mldecisiontreeclassifier/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a decision tree classifier from a checkpoint

- [init(checkpoint:)](mldecisiontreeclassifier/init%28checkpoint_%29.md): Creates a decision tree classifier classifier from a checkpoint.

### Training a decision tree classifier synchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mldecisiontreeclassifier/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a decision tree classifier.
- [targetColumn](mldecisiontreeclassifier/targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mldecisiontreeclassifier/featurecolumns.md): The names of the columns you selected at initialization to train the classifier.

### Evaluating a decision tree classifier

- [evaluation(on:)](mldecisiontreeclassifier/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mldecisiontreeclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mldecisiontreeclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a decision tree classifier

- [predictions(from:)](mldecisiontreeclassifier/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a decision tree classifier

- [write(to:metadata:)](mldecisiontreeclassifier/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mldecisiontreeclassifier/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a decision tree classifier

- [model](mldecisiontreeclassifier/model.md): The Core ML model.
- [MLDecisionTreeClassifier.ModelParameters](mldecisiontreeclassifier/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mldecisiontreeclassifier/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a decision tree classifier

- [description](mldecisiontreeclassifier/description.md): A text representation of the decision tree classifier.
- [debugDescription](mldecisiontreeclassifier/debugdescription.md): A text representation of the decision tree classifier that’s suitable for output during debugging.
- [playgroundDescription](mldecisiontreeclassifier/playgrounddescription.md): A description of the decision tree classifier shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mldecisiontreeclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mldecisiontreeclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mldecisiontreeclassifier/customstringconvertible-implementations.md)

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

- [MLRandomForestClassifier](mlrandomforestclassifier.md): A classifier based on a collection of decision trees trained on subsets of the data.
- [MLBoostedTreeClassifier](mlboostedtreeclassifier.md): A classifier based on a collection of decision trees combined with gradient boosting.
- [MLLogisticRegressionClassifier](mllogisticregressionclassifier.md): A classifier that predicts a discrete target value as a function of data features.
- [MLSupportVectorClassifier](mlsupportvectorclassifier.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.
