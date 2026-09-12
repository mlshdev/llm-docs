> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier)

# MLSupportVectorClassifier

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.14+ (deprecated in 14.0)

A classifier that predicts a binary target value by maximizing the separation between categories.

## Declaration

```swift
struct MLSupportVectorClassifier
```

## Topics

### Creating and training a support vector classifier

- [init(trainingData:targetColumn:featureColumns:parameters:)](mlsupportvectorclassifier/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Deprecated. Creates a support vector classifier.
- [MLSupportVectorClassifier.ModelParameters](mlsupportvectorclassifier/modelparameters-swift.struct.md): Deprecated. Parameters that affect the process of training a model.
- [modelParameters](mlsupportvectorclassifier/modelparameters-swift.property.md): Deprecated. The underlying parameters used when training the model.
- [targetColumn](mlsupportvectorclassifier/targetcolumn.md): Deprecated. The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mlsupportvectorclassifier/featurecolumns.md): Deprecated. The names of the columns you selected at initialization to train the classifier.

### Evaluating a support vector classifier

- [evaluation(on:)](mlsupportvectorclassifier/evaluation%28on_%29.md): Deprecated. Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlsupportvectorclassifier/trainingmetrics.md): Deprecated. Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlsupportvectorclassifier/validationmetrics.md): Deprecated. Measurements of the classifier’s performance on the validation data set.

### Testing a support vector classifier

- [predictions(from:)](mlsupportvectorclassifier/predictions%28from_%29.md): Deprecated. Predicts a column of labels for the given testing data.

### Saving a support vector classifier

- [write(to:metadata:)](mlsupportvectorclassifier/write%28to_metadata_%29.md): Deprecated. Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlsupportvectorclassifier/write%28tofile_metadata_%29.md): Deprecated. Exports a Core ML model file for use in your app.

### Describing a support vector classifier

- [model](mlsupportvectorclassifier/model.md): Deprecated. The Core ML model.
- [description](mlsupportvectorclassifier/description.md): Deprecated. A text representation of the support vector classifier.
- [debugDescription](mlsupportvectorclassifier/debugdescription.md): Deprecated. A text representation of the support vector classifier that’s suitable for output during debugging.
- [playgroundDescription](mlsupportvectorclassifier/playgrounddescription.md): Deprecated. A description of the support vector classifier shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlsupportvectorclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlsupportvectorclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlsupportvectorclassifier/customstringconvertible-implementations.md)

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
- [MLLogisticRegressionClassifier](mllogisticregressionclassifier.md): A classifier that predicts a discrete target value as a function of data features.
