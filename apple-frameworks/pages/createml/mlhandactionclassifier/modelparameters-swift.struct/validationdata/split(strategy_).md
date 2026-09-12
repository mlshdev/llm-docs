> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata/split(strategy:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata/split(strategy:))

# MLHandActionClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a validation dataset by randomly selecting a portion of the hand action classifier task’s training dataset with a split strategy.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## Parameters

- `strategy`: An [MLSplitStrategy](../../../mlsplitstrategy.md) instance.

## See Also

### Designating validation data

- [MLHandActionClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): Creates a validation dataset from a data source.
- [MLHandActionClassifier.ModelParameters.ValidationData.none](none.md): Creates an empty validation dataset, which tells the task to skip the model validation phase in a training session.
