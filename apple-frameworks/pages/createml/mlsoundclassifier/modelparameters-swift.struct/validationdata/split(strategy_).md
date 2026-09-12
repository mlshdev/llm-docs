> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata/split(strategy:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata/split(strategy:))

# MLSoundClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

A validation dataset derived by randomly selecting a portion of the sound classifier’s training dataset using the split strategy.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

<a id="discussion"></a>

## Discussion

- strategy: The partition method this case uses to create the validation dataset from the training dataset.

## See Also

### Designating validation data

- [MLSoundClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLSoundClassifier.ModelParameters.ValidationData.dictionary(\_:)](dictionary%28__%29.md): Deprecated. A validation dataset represented by a dictionary.
- [MLSoundClassifier.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
