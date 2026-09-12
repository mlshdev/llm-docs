> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata/datasource(_:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata/datasource(_:))

# MLHandActionClassifier.ModelParameters.ValidationData.dataSource(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a validation dataset from a data source.

## Declaration

```swift
case dataSource(MLHandActionClassifier.DataSource)
```

<a id="discussion"></a>

## Discussion

- dataSource: An [MLHandActionClassifier.DataSource](../../datasource.md) instance.

## See Also

### Designating validation data

- [MLHandActionClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Creates a validation dataset by randomly selecting a portion of the hand action classifier task’s training dataset with a split strategy.
- [MLHandActionClassifier.ModelParameters.ValidationData.none](none.md): Creates an empty validation dataset, which tells the task to skip the model validation phase in a training session.
