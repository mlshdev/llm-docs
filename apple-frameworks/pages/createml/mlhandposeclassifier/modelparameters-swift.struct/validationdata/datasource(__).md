> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/modelparameters-swift.struct/validationdata/datasource(_:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/modelparameters-swift.struct/validationdata/datasource(_:))

# MLHandPoseClassifier.ModelParameters.ValidationData.dataSource(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a validation dataset from a data source.

## Declaration

```swift
case dataSource(MLHandPoseClassifier.DataSource)
```

## Parameters

- `dataSource`: An [MLHandPoseClassifier.DataSource](../../datasource.md) instance.

## See Also

### Designating validation data

- [MLHandPoseClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Creates a validation dataset by randomly selecting a portion of the hand pose classifier task’s training dataset with a split strategy.
- [MLHandPoseClassifier.ModelParameters.ValidationData.none](none.md): Creates an empty validation dataset, which tells the task to skip the model validation phase in a training session.
