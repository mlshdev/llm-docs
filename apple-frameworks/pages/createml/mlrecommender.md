> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender](https://developer.apple.com/documentation/createml/mlrecommender)

# MLRecommender

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

A model you train to make recommendations based on item similarity, grouping, and, optionally, item ratings.

## Declaration

```swift
struct MLRecommender
```

<a id="overview"></a>

## Overview

Use an [MLRecommender](mlrecommender.md) to train a machine learning model that you include in your app to make recommendations for the user, while keeping their data on-device.

You create a recommender model by training it with tabular data that includes columns for the recommendation items and the groups the items belong to. You also have the option to include an item rating column, which gives higher-rated items more weight than those with lesser or negative ratings. The recommender uses the training information to find similarity patterns by looking at items that occur in groups or have similar ratings within groups.

After you train a recommender, you save it as a Core ML model file with the `.mlmodel` extension. Import this model file into your Xcode project by dragging it into the Project navigator. At runtime, use the recommender to make item suggestions to the user based on the patterns in training data and the user’s item history. For example, a hiking app can recommend trails based on the trails a user has previously hiked and their ratings of those trails.

## Topics

### Creating and training a recommender

- [init(trainingData:userColumn:itemColumn:ratingColumn:parameters:)](mlrecommender/init%28trainingdata_usercolumn_itemcolumn_ratingcolumn_parameters_%29.md): Creates an instance given a table and the names of the item and user columns contained therein.
- [MLRecommender.ModelParameters](mlrecommender/modelparameters-swift.struct.md): Parameters that affect the process of training a recommender model.
- [modelParameters](mlrecommender/modelparameters-swift.property.md): The configuration parameters that the recommender used for training during initialization.
- [userIdentifierColumn](mlrecommender/useridentifiercolumn.md): The name of the column you selected at initialization to define the user identifiers.
- [itemIdentifierColumn](mlrecommender/itemidentifiercolumn.md): The name of the column you selected at initialization to define the item identifiers.
- [ratingColumn](mlrecommender/ratingcolumn.md): The name of the column you selected at initialization to define the ratings.

### Evaluating a recommender

- [evaluation(on:userColumn:itemColumn:ratingColumn:cutoffs:excludingObserved:)](mlrecommender/evaluation%28on_usercolumn_itemcolumn_ratingcolumn_cutoffs_excludingobserved_%29.md): Computes the metrics for the given testing data.
- [MLRecommenderMetrics](mlrecommendermetrics.md): Metrics you use to evaluate a recommender’s performance.

### Testing a recommender

- [recommendations(fromUsers:maxCount:restrictingToItems:excluding:excludingObserved:)](mlrecommender/recommendations%28fromusers_maxcount_restrictingtoitems_excluding_excludingobserved_%29.md): Deprecated. Retrieves the highest scored item for the given array of users, based on item similarity and the rating column.
- [MLIdentifier](mlidentifier.md): Deprecated. A type the Create ML framework can use as a machine learning identifier.
- [getSimilarItems(fromItems:maxCount:)](mlrecommender/getsimilaritems%28fromitems_maxcount_%29.md): Deprecated. Returns the top ranked similar items based on the model’s similarity type.

### Saving a recommender

- [write(to:metadata:)](mlrecommender/write%28to_metadata_%29.md): Exports the recommender as a Core ML model file at the given URL.
- [write(toFile:metadata:)](mlrecommender/write%28tofile_metadata_%29.md): Exports the recommender as a Core ML model file at the given file path.

### Describing a recommender

- [model](mlrecommender/model.md): The Core ML model.

### Supporting types

- [MLRecommender.ModelAlgorithmType](mlrecommender/modelalgorithmtype.md): The algorithms a recommender can use to make recommendations.
- [MLRecommender.SimilarityType](mlrecommender/similaritytype.md): The metric by which the recommender computes item similarity.

## See Also

### Tabular models

- [Creating a model from tabular data](creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [MLClassifier](mlclassifier.md): A model you train to classify data into discrete categories.
- [MLRegressor](mlregressor.md): A model you train to estimate continuous values.
