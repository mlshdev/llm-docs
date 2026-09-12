> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeclassifier/targetcolumn](https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/targetcolumn)

# targetColumn

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The name of the column you selected at initialization to define which categories the classifier predicts.

## Declaration

```swift
var targetColumn: String
```

<a id="discussion"></a>

## Discussion

Changing the value of this property doesn’t retrain the model or affect its behavior.

## See Also

### Training a boosted tree classifier synchronously

- [init(trainingData:targetColumn:featureColumns:parameters:)](init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Creates a boosted tree classifier.
- [featureColumns](featurecolumns.md): The names of the columns you selected at initialization to train the classifier.
