> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct/maxsimilarityiterations](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/maxsimilarityiterations)

# maxSimilarityIterations

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The largest number of iterations the recommender uses to build its lookup table.

## Declaration

```swift
var maxSimilarityIterations: Int
```

<a id="discussion"></a>

## Discussion

This value limits the number of iterations the recommender can use to construct a lookup table. The default value is `1024`.

## See Also

### Configuring the parameters

- [algorithm](algorithm.md): The algorithm the recommender uses to make recommendations.
- [maxCount](maxcount.md): The largest number of similar items the model stores for each item.
- [threshold](threshold.md): The item confidence value cutoff, below which the recommender omits those items from its recommendations.
- [nearestItems](nearestitems.md): Deprecated. A data table that lists each item’s nearest items.
- [nearestItemsDataFrame](nearestitemsdataframe.md): A data frame that lists each item’s nearest items.
