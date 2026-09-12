> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct/algorithm](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/algorithm)

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The algorithm the recommender uses to make recommendations.

## Declaration

```swift
var algorithm: MLRecommender.ModelAlgorithmType
```

<a id="discussion"></a>

## Discussion

The default is [MLRecommender.ModelAlgorithmType.itemSimilarity(\_:)](../modelalgorithmtype/itemsimilarity%28__%29.md).

## See Also

### Configuring the parameters

- [maxCount](maxcount.md): The largest number of similar items the model stores for each item.
- [maxSimilarityIterations](maxsimilarityiterations.md): The largest number of iterations the recommender uses to build its lookup table.
- [threshold](threshold.md): The item confidence value cutoff, below which the recommender omits those items from its recommendations.
- [nearestItems](nearestitems.md): Deprecated. A data table that lists each item’s nearest items.
- [nearestItemsDataFrame](nearestitemsdataframe.md): A data frame that lists each item’s nearest items.
