> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllinearregressor](https://developer.apple.com/documentation/createml/mllinearregressor)

# MLLinearRegressor

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A regressor that estimates the target as a linear function of the features.

## Declaration

```swift
struct MLLinearRegressor
```

## Topics

### Creating a linear regressor asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mllinearregressor/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a linear regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mllinearregressor/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mllinearregressor/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mllinearregressor/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a linear regressor from a checkpoint

- [init(checkpoint:)](mllinearregressor/init%28checkpoint_%29.md): Creates a linear regressor from a checkpoint.

### Training a linear regressor synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mllinearregressor/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a linear regressor.
- [targetColumn](mllinearregressor/targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](mllinearregressor/featurecolumns.md): The names of the columns you selected at initialization to train the regressor.

### Evaluating a linear regressor

- [evaluation(on:)](mllinearregressor/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mllinearregressor/trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](mllinearregressor/validationmetrics.md): Measurements of the regressor’s performance on the validation data set.

### Testing a linear regressor

- [predictions(from:)](mllinearregressor/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a linear regressor

- [write(to:metadata:)](mllinearregressor/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mllinearregressor/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a linear regressor

- [model](mllinearregressor/model.md): The Core ML model.
- [MLLinearRegressor.ModelParameters](mllinearregressor/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mllinearregressor/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a linear regressor

- [description](mllinearregressor/description.md): A text representation of the linear regressor.
- [debugDescription](mllinearregressor/debugdescription.md): A text representation of the linear regressor that’s suitable for output during debugging.
- [playgroundDescription](mllinearregressor/playgrounddescription.md): A description of the linear regressor shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mllinearregressor/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mllinearregressor/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mllinearregressor/customstringconvertible-implementations.md)

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

- [MLDecisionTreeRegressor](mldecisiontreeregressor.md): A regressor that estimates the target by learning rules to split the data.
- [MLRandomForestRegressor](mlrandomforestregressor.md): A regressor based on a collection of decision trees trained on subsets of the data.
- [MLBoostedTreeRegressor](mlboostedtreeregressor.md): A regressor based on a collection of decision trees combined with gradient boosting.
