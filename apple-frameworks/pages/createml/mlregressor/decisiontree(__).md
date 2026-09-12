> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressor/decisiontree(_:)](https://developer.apple.com/documentation/createml/mlregressor/decisiontree(_:))

# MLRegressor.decisionTree(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.14+

A regressor that estimates the target by learning rules to split the data.

## Declaration

```swift
case decisionTree(MLDecisionTreeRegressor)
```

<a id="discussion"></a>

## Discussion

Don’t create an [MLRegressor](../mlregressor.md) using one of its enumeration cases. Use the regressor’s initializer instead.

## See Also

### Regressor cases

- [MLRegressor.linear(\_:)](linear%28__%29.md): A regressor that estimates the target as a linear function of the features.
- [MLRegressor.boostedTree(\_:)](boostedtree%28__%29.md): A regressor based on a collection of decision trees combined with gradient boosting.
- [MLRegressor.randomForest(\_:)](randomforest%28__%29.md): A regressor based on a collection of decision trees trained on subsets of the data.
