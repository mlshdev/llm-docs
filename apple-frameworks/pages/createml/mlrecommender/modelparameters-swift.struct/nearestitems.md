> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct/nearestitems](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/nearestitems)

# nearestItems

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 14.0)

A data table that lists each item’s nearest items.

> Use nearestItemsDataFrame.

## Declaration

```swift
var nearestItems: MLDataTable?
```

## See Also

### Configuring the parameters

- [algorithm](algorithm.md): The algorithm the recommender uses to make recommendations.
- [maxCount](maxcount.md): The largest number of similar items the model stores for each item.
- [maxSimilarityIterations](maxsimilarityiterations.md): The largest number of iterations the recommender uses to build its lookup table.
- [threshold](threshold.md): The item confidence value cutoff, below which the recommender omits those items from its recommendations.
- [nearestItemsDataFrame](nearestitemsdataframe.md): A data frame that lists each item’s nearest items.
