> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlclassifier/boostedtree(_:)](https://developer.apple.com/documentation/createml/mlclassifier/boostedtree(_:))

# MLClassifier.boostedTree(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.14+

A classifier based on a collection of decision trees combined with gradient boosting.

## Declaration

```swift
case boostedTree(MLBoostedTreeClassifier)
```

<a id="discussion"></a>

## Discussion

Don’t create an [MLClassifier](../mlclassifier.md) using one of its enumeration cases. Use the classifier’s initializer instead.

## See Also

### Classifier cases

- [MLClassifier.decisionTree(\_:)](decisiontree%28__%29.md): A classifier that predicts the target by creating rules to split the data.
- [MLClassifier.randomForest(\_:)](randomforest%28__%29.md): A classifier based on a collection of decision trees trained on subsets of the data.
- [MLClassifier.logisticRegression(\_:)](logisticregression%28__%29.md): A classifier that predicts a discrete target value as a function of data features.
- [MLClassifier.supportVector(\_:)](supportvector%28__%29.md): Deprecated. A classifier that predicts a binary target value by maximizing the separation between categories.
