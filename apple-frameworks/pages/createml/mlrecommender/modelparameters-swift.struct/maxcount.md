> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct/maxcount](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/maxcount)

# maxCount

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The largest number of similar items the model stores for each item.

## Declaration

```swift
var maxCount: Int
```

<a id="discussion"></a>

## Discussion

The memory Create ML requires to train this model is proportional to this number. A lower value reduces its demand for memory but decreases the recommender’s accuracy. The default value is `64`.

## See Also

### Configuring the parameters

- [algorithm](algorithm.md): The algorithm the recommender uses to make recommendations.
- [maxSimilarityIterations](maxsimilarityiterations.md): The largest number of iterations the recommender uses to build its lookup table.
- [threshold](threshold.md): The item confidence value cutoff, below which the recommender omits those items from its recommendations.
- [nearestItems](nearestitems.md): Deprecated. A data table that lists each item’s nearest items.
- [nearestItemsDataFrame](nearestitemsdataframe.md): A data frame that lists each item’s nearest items.
