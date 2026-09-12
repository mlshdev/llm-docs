> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestregressor](https://developer.apple.com/documentation/createml/mlrandomforestregressor)

# MLRandomForestRegressor

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A regressor based on a collection of decision trees trained on subsets of the data.

## Declaration

```swift
struct MLRandomForestRegressor
```

## Topics

### Training a random forest regressor

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlrandomforestregressor/train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a random forest regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](mlrandomforestregressor/maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](mlrandomforestregressor/resume%28__%29.md): Resumes a training session from the last checkpoint if available.
- [restoreTrainingSession(sessionParameters:)](mlrandomforestregressor/restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.

### Creating a random forest regressor from a checkpoint

- [init(checkpoint:)](mlrandomforestregressor/init%28checkpoint_%29.md): Creates a random forest regressor from a checkpoint.

### Training a random forest regressor synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](mlrandomforestregressor/init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a random tree regressor.
- [targetColumn](mlrandomforestregressor/targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](mlrandomforestregressor/featurecolumns.md): The names of the columns you selected at initialization to train the regressor.

### Evaluating a random forest regressor

- [evaluation(on:)](mlrandomforestregressor/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlrandomforestregressor/trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](mlrandomforestregressor/validationmetrics.md): Measurements of the regressor’s performance on the validation data set.

### Testing a Random Forest Regressor

- [predictions(from:)](mlrandomforestregressor/predictions%28from_%29.md): Predicts a column of labels for the given testing data.

### Saving a Random Forest Regressor

- [write(to:metadata:)](mlrandomforestregressor/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlrandomforestregressor/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Inspecting a random forest regressor

- [model](mlrandomforestregressor/model.md): The Core ML model.
- [MLRandomForestRegressor.ModelParameters](mlrandomforestregressor/modelparameters-swift.struct.md): Parameters that affect the process of training a model.
- [modelParameters](mlrandomforestregressor/modelparameters-swift.property.md): The underlying parameters used when training the model.

### Describing a random forest regressor

- [description](mlrandomforestregressor/description.md): A text representation of the random forest regressor.
- [debugDescription](mlrandomforestregressor/debugdescription.md): A text representation of the random forest regressor that’s suitable for output during debugging.
- [playgroundDescription](mlrandomforestregressor/playgrounddescription.md): A description of the random forest regressor shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlrandomforestregressor/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlrandomforestregressor/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlrandomforestregressor/customstringconvertible-implementations.md)

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
- [MLBoostedTreeRegressor](mlboostedtreeregressor.md): A regressor based on a collection of decision trees combined with gradient boosting.
