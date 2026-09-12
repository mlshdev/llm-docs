> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/validationdata)

# MLHandActionClassifier.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A dataset a hand action classifier task uses to validate the model during a training session.

## Declaration

```swift
enum ValidationData
```

## Topics

### Designating validation data

- [MLHandActionClassifier.ModelParameters.ValidationData.dataSource(\_:)](validationdata/datasource%28__%29.md): Creates a validation dataset from a data source.
- [MLHandActionClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata/split%28strategy_%29.md): Creates a validation dataset by randomly selecting a portion of the hand action classifier task’s training dataset with a split strategy.
- [MLHandActionClassifier.ModelParameters.ValidationData.none](validationdata/none.md): Creates an empty validation dataset, which tells the task to skip the model validation phase in a training session.

## See Also

### Parameter supporting types

- [MLHandActionClassifier.VideoAugmentationOptions](../videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.
- [MLHandActionClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The hand action classifier training algorithm options.
