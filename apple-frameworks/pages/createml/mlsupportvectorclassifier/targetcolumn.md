> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/targetcolumn](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/targetcolumn)

# targetColumn

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 14.0)

The name of the column you selected at initialization to define which categories the classifier predicts.

## Declaration

```swift
var targetColumn: String
```

<a id="discussion"></a>

## Discussion

Changing the value of this property doesn’t retrain the model or affect its behavior.

## See Also

### Creating and training a support vector classifier

- [init(trainingData:targetColumn:featureColumns:parameters:)](init%28trainingdata_targetcolumn_featurecolumns_parameters_%29.md): Deprecated. Creates a support vector classifier.
- [MLSupportVectorClassifier.ModelParameters](modelparameters-swift.struct.md): Deprecated. Parameters that affect the process of training a model.
- [modelParameters](modelparameters-swift.property.md): Deprecated. The underlying parameters used when training the model.
- [featureColumns](featurecolumns.md): Deprecated. The names of the columns you selected at initialization to train the classifier.
