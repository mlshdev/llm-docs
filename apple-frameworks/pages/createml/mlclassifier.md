> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifier](https://developer.apple.com/documentation/createml/mlclassifier)

# MLClassifier

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

A model you train to classify data into discrete categories.

## Declaration

```swift
enum MLClassifier
```

## Mentioned In

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md)

<a id="overview"></a>

## Overview

Use an [MLClassifier](mlclassifier.md) to train a general-purpose model to recognize categories.

For example, you can create a classifier that predicts whether a sports team is likely to win or lose its next game by training it with these inputs:

- The team’s win-loss ratio
- The team’s game locations

> **Important**

> When working with image or natural language data, don’t use [MLClassifier](mlclassifier.md). Instead, use the `MLImageClassifierBuilder` or one of the Natural Language models ([MLTextClassifier](mltextclassifier.md) or [MLWordTagger](mlwordtagger.md)).

When you create an [MLClassifier](mlclassifier.md), Create ML inspects your data and automatically chooses a specific classifier (see *Supporting Classifier Types*).

## Topics

### Creating and training a classifier

- [init(trainingData:targetColumn:featureColumns:)](mlclassifier/init%28trainingdata_targetcolumn_featurecolumns_%29.md): Creates a classifier.
- [targetColumn](mlclassifier/targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
- [featureColumns](mlclassifier/featurecolumns.md): The names of the columns you selected at initialization to train the classifier.

### Evaluating a classifier

- [evaluation(on:)](mlclassifier/evaluation%28on_%29.md): Evaluates the classifier on the provided labeled data.
- [trainingMetrics](mlclassifier/trainingmetrics.md): Measurements of the classifier’s performance on the training data set.
- [validationMetrics](mlclassifier/validationmetrics.md): Measurements of the classifier’s performance on the validation data set.

### Testing a classifier

- [predictions(from:)](mlclassifier/predictions%28from_%29.md)

### Saving a classifier

- [write(to:metadata:)](mlclassifier/write%28to_metadata_%29.md): Exports a Core ML model file for use in your app.
- [write(toFile:metadata:)](mlclassifier/write%28tofile_metadata_%29.md): Exports a Core ML model file for use in your app.

### Describing a model

- [model](mlclassifier/model.md): The underlying Core ML model stored in memory.
- [description](mlclassifier/description.md): A text representation of the classifier.
- [debugDescription](mlclassifier/debugdescription.md): A text representation of the classifier that’s suitable for output during debugging.
- [playgroundDescription](mlclassifier/playgrounddescription.md): A description of the classifier shown in a playground.

### Classifier cases

- [MLClassifier.decisionTree(\_:)](mlclassifier/decisiontree%28__%29.md): A classifier that predicts the target by creating rules to split the data.
- [MLClassifier.randomForest(\_:)](mlclassifier/randomforest%28__%29.md): A classifier based on a collection of decision trees trained on subsets of the data.
- [MLClassifier.boostedTree(\_:)](mlclassifier/boostedtree%28__%29.md): A classifier based on a collection of decision trees combined with gradient boosting.
- [MLClassifier.logisticRegression(\_:)](mlclassifier/logisticregression%28__%29.md): A classifier that predicts a discrete target value as a function of data features.
- [MLClassifier.supportVector(\_:)](mlclassifier/supportvector%28__%29.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.

### Supporting classifier types

- [MLDecisionTreeClassifier](mldecisiontreeclassifier.md): A classifier that predicts the target by creating rules to split the data.
- [MLRandomForestClassifier](mlrandomforestclassifier.md): A classifier based on a collection of decision trees trained on subsets of the data.
- [MLBoostedTreeClassifier](mlboostedtreeclassifier.md): A classifier based on a collection of decision trees combined with gradient boosting.
- [MLLogisticRegressionClassifier](mllogisticregressionclassifier.md): A classifier that predicts a discrete target value as a function of data features.
- [MLSupportVectorClassifier](mlsupportvectorclassifier.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlclassifier/customstringconvertible-implementations.md)

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
- [MLRegressor](mlregressor.md): A model you train to estimate continuous values.
- [MLRecommender](mlrecommender.md): A model you train to make recommendations based on item similarity, grouping, and, optionally, item ratings.
