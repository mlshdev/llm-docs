> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata](https://developer.apple.com/documentation/createml/mlactionclassifier/modelparameters-swift.struct/validationdata)

# MLActionClassifier.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

The source of a validation dataset for an action classifier.

## Declaration

```swift
enum ValidationData
```

## Topics

### Designating validation data

- [MLActionClassifier.ModelParameters.ValidationData.dataSource(\_:)](validationdata/datasource%28__%29.md): A validation dataset represented by a data source.
- [MLActionClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata/split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the action classifier’s training dataset using the split strategy.
- [MLActionClassifier.ModelParameters.ValidationData.none](validationdata/none.md): An empty validation dataset that skips the model validation phase after training.

## See Also

### Supporting types

- [MLActionClassifier.VideoAugmentationOptions](../videoaugmentationoptions.md): The video augmentations for an action classifier training session.
- [MLActionClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The action classifier training algorithm options.
