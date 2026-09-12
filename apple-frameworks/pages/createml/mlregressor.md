> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressor](https://developer.apple.com/documentation/createml/mlregressor)

# MLRegressor

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

A model you train to estimate continuous values.

## Declaration

```swift
enum MLRegressor
```

## Mentioned In

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

Use an [MLRegressor](mlregressor.md) to estimate continuous values like price, time, or temperature.

A regressor differs from a classifier because it can predict output values not seen during the training process. By contrast, a classifier can only classify input into the categories you provide in the training data.

For example, when estimating housing prices on Mars, a regressor can interpolate between the examples to estimate prices not seen during training. The figure below shows a linear regressor for Mars real-estate prices similar to the [Integrating a Core ML Model into Your App](../coreml/integrating-a-core-ml-model-into-your-app.md) sample.

![A graph showing housing prices for mars with a linear regressor used to create a continuous estimation between](https://developer.apple.com/images/com.apple.createml/MLRegressor-1@2x.png)

In this case, there are no data points with three solar panels, but the regressor can make an informed prediction about the housing price.

When you create an [MLRegressor](mlregressor.md), Create ML inspects your data and automatically chooses a specific regressor (see *Supporting Regressor Types*).

## Topics

### Creating and training a regressor

- [init(trainingData:targetColumn:featureColumns:)](mlregressor/init%28trainingdata_targetcolumn_featurecolumns_%29.md): Creates a regressor.
- [targetColumn](mlregressor/targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
- [featureColumns](mlregressor/featurecolumns.md): The names of the columns you selected at initialization to train the regressor.

### Evaluating a regressor

- [evaluation(on:)](mlregressor/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlregressor/trainingmetrics.md): Measurements of the regressor’s performance on the training data set.
- [validationMetrics](mlregressor/validationmetrics.md): Measurements of the regressor’s performance on the validation data set.

### Testing a regressor

- [predictions(from:)](mlregressor/predictions%28from_%29.md)

### Saving a regressor

- [write(to:metadata:)](mlregressor/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlregressor/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Describing a regressor

- [model](mlregressor/model.md): The underlying Core ML model stored in memory.
- [description](mlregressor/description.md): A text representation of the regressor.
- [debugDescription](mlregressor/debugdescription.md): A text representation of the regressor that’s suitable for output during debugging.
- [playgroundDescription](mlregressor/playgrounddescription.md): A description of the regressor shown in a playground.

### Regressor cases

- [MLRegressor.linear(\_:)](mlregressor/linear%28__%29.md): A regressor that estimates the target as a linear function of the features.
- [MLRegressor.decisionTree(\_:)](mlregressor/decisiontree%28__%29.md): A regressor that estimates the target by learning rules to split the data.
- [MLRegressor.boostedTree(\_:)](mlregressor/boostedtree%28__%29.md): A regressor based on a collection of decision trees combined with gradient boosting.
- [MLRegressor.randomForest(\_:)](mlregressor/randomforest%28__%29.md): A regressor based on a collection of decision trees trained on subsets of the data.

### Supporting regressor types

- [MLLinearRegressor](mllinearregressor.md): A regressor that estimates the target as a linear function of the features.
- [MLDecisionTreeRegressor](mldecisiontreeregressor.md): A regressor that estimates the target by learning rules to split the data.
- [MLRandomForestRegressor](mlrandomforestregressor.md): A regressor based on a collection of decision trees trained on subsets of the data.
- [MLBoostedTreeRegressor](mlboostedtreeregressor.md): A regressor based on a collection of decision trees combined with gradient boosting.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlregressor/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlregressor/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlregressor/customstringconvertible-implementations.md)

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

### Tabular models

- [Creating a model from tabular data](creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [MLClassifier](mlclassifier.md): A model you train to classify data into discrete categories.
- [MLRecommender](mlrecommender.md): A model you train to make recommendations based on item similarity, grouping, and, optionally, item ratings.
