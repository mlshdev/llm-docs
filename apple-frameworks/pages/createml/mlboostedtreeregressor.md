> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeregressor](https://developer.apple.com/documentation/createml/mlboostedtreeregressor)

# MLBoostedTreeRegressor

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A regressor based on a collection of decision trees combined with gradient boosting.

## Declaration

```swift
struct MLBoostedTreeRegressor
```

## Topics

### Training a boosted tree regressor asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlboostedtreeregressor/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a boosted tree regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlboostedtreeregressor/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mlboostedtreeregressor/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mlboostedtreeregressor/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a boosted tree regressor from a checkpoint

- [init(checkpoint:)](mlboostedtreeregressor/init%28checkpoint_%29.md): Creates a boosted tree regressor from a checkpoint.

### Training a boosted tree regressor synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mlboostedtreeregressor/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a boosted tree regressor.
- [targetColumn](mlboostedtreeregressor/targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](mlboostedtreeregressor/featurecolumns.md): The names of the columns you selected at initialization to train the regressor.

### Evaluating a boosted tree regressor

- [evaluation(on:)](mlboostedtreeregressor/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlboostedtreeregressor/trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](mlboostedtreeregressor/validationmetrics.md): Measurements of the regressor’s performance on the validation data set.

### Testing a boosted tree regressor

- [predictions(from:)](mlboostedtreeregressor/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a boosted tree regressor

- [write(to:metadata:)](mlboostedtreeregressor/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlboostedtreeregressor/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a boosted tree regressor

- [model](mlboostedtreeregressor/model.md): The Core ML model.
- [MLBoostedTreeRegressor.ModelParameters](mlboostedtreeregressor/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mlboostedtreeregressor/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a boosted tree regressor

- [description](mlboostedtreeregressor/description.md): A text representation of the boosted tree regressor.
- [debugDescription](mlboostedtreeregressor/debugdescription.md): A text representation of the boosted tree regressor that’s suitable for output during debugging.
- [playgroundDescription](mlboostedtreeregressor/playgrounddescription.md): A description of the boosted tree regressor shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlboostedtreeregressor/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlboostedtreeregressor/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlboostedtreeregressor/customstringconvertible-implementations.md)

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
- [MLDecisionTreeRegressor](mldecisiontreeregressor.md): A regressor that estimates the target by learning rules to split the data.
- [MLRandomForestRegressor](mlrandomforestregressor.md): A regressor based on a collection of decision trees trained on subsets of the data.
