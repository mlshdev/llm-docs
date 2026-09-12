> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor](https://developer.apple.com/documentation/createml/mldecisiontreeregressor)

# MLDecisionTreeRegressor

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A regressor that estimates the target by learning rules to split the data.

## Declaration

```swift
struct MLDecisionTreeRegressor
```

## Topics

### Training a decision tree regressor asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mldecisiontreeregressor/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a decision tree regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mldecisiontreeregressor/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mldecisiontreeregressor/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mldecisiontreeregressor/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a decision tree regressor from a checkpoint

- [init(checkpoint:)](mldecisiontreeregressor/init%28checkpoint_%29.md): Creates a decision tree regressor from a checkpoint.

### Training a decision tree regressor synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mldecisiontreeregressor/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a decision tree regressor.
- [targetColumn](mldecisiontreeregressor/targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](mldecisiontreeregressor/featurecolumns.md): The names of the columns you selected at initialization to train the regressor.

### Evaluating a decision tree regressor

- [evaluation(on:)](mldecisiontreeregressor/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mldecisiontreeregressor/trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](mldecisiontreeregressor/validationmetrics.md): Measurements of the regressor’s performance on the validation data set.

### Testing a decision tree regressor

- [predictions(from:)](mldecisiontreeregressor/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a decision tree regressor

- [write(to:metadata:)](mldecisiontreeregressor/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mldecisiontreeregressor/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a decision tree regressor

- [model](mldecisiontreeregressor/model.md): The Core ML model.
- [MLDecisionTreeRegressor.ModelParameters](mldecisiontreeregressor/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mldecisiontreeregressor/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a decision tree regressor

- [description](mldecisiontreeregressor/description.md): A text representation of the decision tree regressor.
- [debugDescription](mldecisiontreeregressor/debugdescription.md): A text representation of the decision tree regressor that’s suitable for output during debugging.
- [playgroundDescription](mldecisiontreeregressor/playgrounddescription.md): A description of the decision tree regressor shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mldecisiontreeregressor/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mldecisiontreeregressor/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mldecisiontreeregressor/customstringconvertible-implementations.md)

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

### Supporting regressor types

- [MLLinearRegressor](mllinearregressor.md): A regressor that estimates the target as a linear function of the features.
- [MLRandomForestRegressor](mlrandomforestregressor.md): A regressor based on a collection of decision trees trained on subsets of the data.
- [MLBoostedTreeRegressor](mlboostedtreeregressor.md): A regressor based on a collection of decision trees combined with gradient boosting.
