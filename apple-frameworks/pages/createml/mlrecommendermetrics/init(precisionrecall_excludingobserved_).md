> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommendermetrics/init(precisionrecall:excludingobserved:)](https://developer.apple.com/documentation/createml/mlrecommendermetrics/init(precisionrecall:excludingobserved:))

# init(precisionRecall:excludingObserved:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Creates metrics for a recommender, given a data table with precision and recall metric columns, and whether the recommender omitted training data.

## Declaration

```swift
init(precisionRecall: MLDataTable, excludingObserved: Bool)
```

<a id="discussion"></a>

## Discussion

Do not use this initializer. [MLRecommender](../mlrecommender.md) generates metrics for you when you call its [evaluation(on:userColumn:itemColumn:ratingColumn:cutoffs:excludingObserved:)](../mlrecommender/evaluation%28on_usercolumn_itemcolumn_ratingcolumn_cutoffs_excludingobserved_%29.md) method.
