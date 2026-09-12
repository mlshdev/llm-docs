> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.struct/threshold](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/threshold)

# threshold

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The item confidence value cutoff, below which the recommender omits those items from its recommendations.

## Declaration

```swift
var threshold: Double
```

<a id="discussion"></a>

## Discussion

The default value is `0.001`.

## See Also

### Configuring the parameters

- [algorithm](algorithm.md): The algorithm the recommender uses to make recommendations.
- [maxCount](maxcount.md): The largest number of similar items the model stores for each item.
- [maxSimilarityIterations](maxsimilarityiterations.md): The largest number of iterations the recommender uses to build its lookup table.
- [nearestItems](nearestitems.md): Deprecated. A data table that lists each item’s nearest items.
- [nearestItemsDataFrame](nearestitemsdataframe.md): A data frame that lists each item’s nearest items.
