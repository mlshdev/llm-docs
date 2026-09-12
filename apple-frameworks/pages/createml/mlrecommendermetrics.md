> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommendermetrics](https://developer.apple.com/documentation/createml/mlrecommendermetrics)

# MLRecommenderMetrics

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

Metrics you use to evaluate a recommender’s performance.

## Declaration

```swift
struct MLRecommenderMetrics
```

## Topics

### Assessing the model

- [excludingObserved](mlrecommendermetrics/excludingobserved.md): A Boolean value that indicates whether the recommender omitted training data from the recommendations.
- [precisionRecall](mlrecommendermetrics/precisionrecall.md): Deprecated. A data table with the recall and precision for each item.
- [precisionRecallDataFrame](mlrecommendermetrics/precisionrecalldataframe.md): A data table with the recall and precision for each item.

### Handling errors

- [isValid](mlrecommendermetrics/isvalid.md): A Boolean value indicating whether the recommender model was able to calculate metrics.
- [error](mlrecommendermetrics/error.md): The underlying error present when the metrics are invalid.

### Creating metrics

- [init(precisionRecall:excludingObserved:)](mlrecommendermetrics/init%28precisionrecall_excludingobserved_%29.md): Deprecated. Creates metrics for a recommender, given a data table with precision and recall metric columns, and whether the recommender omitted training data.

## See Also

### Model accuracy

- [Improving Your Model’s Accuracy](improving-your-model-s-accuracy.md): Use metrics to tune the performance of your machine learning model.
- [MLClassifierMetrics](mlclassifiermetrics.md): Metrics you use to evaluate a classifier’s performance.
- [MLRegressorMetrics](mlregressormetrics.md): Metrics you use to evaluate a regressor’s performance.
- [MLWordTaggerMetrics](mlwordtaggermetrics.md): Metrics you use to evaluate a word tagger’s performance.
- [MLObjectDetectorMetrics](mlobjectdetectormetrics.md): Metrics you use to evaluate an object detector’s performance.
