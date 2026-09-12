> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/featurecolumns](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/featurecolumns)

# featureColumns

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The names of the columns you selected at initialization to train the classifier.

## Declaration

```swift
var featureColumns: [String]
```

<a id="discussion"></a>

## Discussion

Changing the value of this property doesn’t retrain the model or affect its behavior.

## See Also

### Training a decision tree classifier synchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a decision tree classifier.
- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which categories the classifier predicts.
