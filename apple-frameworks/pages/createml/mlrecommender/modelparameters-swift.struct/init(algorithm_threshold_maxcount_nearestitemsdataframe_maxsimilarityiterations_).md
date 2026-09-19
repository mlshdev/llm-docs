> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/init(algorithm:threshold:maxcount:nearestitemsdataframe:maxsimilarityiterations:)

# init(algorithm:threshold:maxCount:nearestItemsDataFrame:maxSimilarityIterations:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new set of recommender configuration parameters.

## Declaration

```swift
init(algorithm: MLRecommender.ModelAlgorithmType = .itemSimilarity(.cosine), threshold: Double = 0.001, maxCount: Int = 64, nearestItemsDataFrame: DataFrame?, maxSimilarityIterations: Int = 1024)
```

## See Also

### Creating parameters

- [init(algorithm:threshold:maxCount:nearestItems:maxSimilarityIterations:)](init%28algorithm_threshold_maxcount_nearestitems_maxsimilarityiterations_%29.md): Deprecated. Creates a new set of recommender configuration parameters.
- [MLRecommender.ModelAlgorithmType](../modelalgorithmtype.md): The algorithms a recommender can use to make recommendations.
