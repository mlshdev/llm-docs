> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata/none](https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata/none)

# MLActionClassifier.ModelParameters.ValidationData.none

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 11.0+

An empty validation dataset that skips the model validation phase after training.

## Declaration

```swift
case none
```

<a id="discussion"></a>

## Discussion

Use this case when you don’t have validation data while preventing Create ML from using any of your training dataset for validation.

## See Also

### Designating validation data

- [MLActionClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLActionClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the action classifier’s training dataset using the split strategy.
