> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.struct/init(algorithm:threshold:maxcount:nearestitems:maxsimilarityiterations:)

# init(algorithm:threshold:maxCount:nearestItems:maxSimilarityIterations:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Creates a new set of recommender configuration parameters.

## Declaration

```swift
init(algorithm: MLRecommender.ModelAlgorithmType = .itemSimilarity(.cosine), threshold: Double = 0.001, maxCount: Int = 64, nearestItems: MLDataTable?, maxSimilarityIterations: Int = 1024)
```

## See Also

### Creating parameters

- [init(algorithm:threshold:maxCount:nearestItemsDataFrame:maxSimilarityIterations:)](init%28algorithm_threshold_maxcount_nearestitemsdataframe_maxsimilarityiterations_%29.md): Creates a new set of recommender configuration parameters.
- [MLRecommender.ModelAlgorithmType](../modelalgorithmtype.md): The algorithms a recommender can use to make recommendations.
