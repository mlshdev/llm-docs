> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct)

# MLRecommender.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

Parameters that affect the process of training a recommender model.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(algorithm:threshold:maxCount:nearestItemsDataFrame:maxSimilarityIterations:)](modelparameters-swift.struct/init%28algorithm_threshold_maxcount_nearestitemsdataframe_maxsimilarityiterations_%29.md): Creates a new set of recommender configuration parameters.
- [init(algorithm:threshold:maxCount:nearestItems:maxSimilarityIterations:)](modelparameters-swift.struct/init%28algorithm_threshold_maxcount_nearestitems_maxsimilarityiterations_%29.md): Deprecated. Creates a new set of recommender configuration parameters.
- [MLRecommender.ModelAlgorithmType](modelalgorithmtype.md): The algorithms a recommender can use to make recommendations.

### Configuring the parameters

- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm the recommender uses to make recommendations.
- [maxCount](modelparameters-swift.struct/maxcount.md): The largest number of similar items the model stores for each item.
- [maxSimilarityIterations](modelparameters-swift.struct/maxsimilarityiterations.md): The largest number of iterations the recommender uses to build its lookup table.
- [threshold](modelparameters-swift.struct/threshold.md): The item confidence value cutoff, below which the recommender omits those items from its recommendations.
- [nearestItems](modelparameters-swift.struct/nearestitems.md): Deprecated. A data table that lists each item’s nearest items.
- [nearestItemsDataFrame](modelparameters-swift.struct/nearestitemsdataframe.md): A data frame that lists each item’s nearest items.

## See Also

### Creating and training a recommender

- [init(trainingData:userColumn:itemColumn:ratingColumn:parameters:)](init%28trainingdata_usercolumn_itemcolumn_ratingcolumn_parameters_%29.md): Creates an instance given a table and the names of the item and user columns contained therein.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the recommender used for training during initialization.
- [userIdentifierColumn](useridentifiercolumn.md): The name of the column you selected at initialization to define the user identifiers.
- [itemIdentifierColumn](itemidentifiercolumn.md): The name of the column you selected at initialization to define the item identifiers.
- [ratingColumn](ratingcolumn.md): The name of the column you selected at initialization to define the ratings.
