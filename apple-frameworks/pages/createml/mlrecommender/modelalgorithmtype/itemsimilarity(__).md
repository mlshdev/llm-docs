> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelalgorithmtype/itemsimilarity(_:)](https://developer.apple.com/documentation/createml/mlrecommender/modelalgorithmtype/itemsimilarity(_:))

# MLRecommender.ModelAlgorithmType.itemSimilarity(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

An algorithm that compares the similarity from item to item.

## Declaration

```swift
case itemSimilarity(MLRecommender.SimilarityType)
```

<a id="discussion"></a>

## Discussion

The default value is [MLRecommender.SimilarityType.jaccard](../similaritytype/jaccard.md).

## See Also

### Recommender algorithms

- [MLRecommender.SimilarityType](../similaritytype.md): The metric by which the recommender computes item similarity.
