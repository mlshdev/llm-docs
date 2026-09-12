> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata)

# MLSoundClassifier.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

The source of a validation dataset for a sound classifier.

## Declaration

```swift
enum ValidationData
```

## Topics

### Designating validation data

- [MLSoundClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata/split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the sound classifier’s training dataset using the split strategy.
- [MLSoundClassifier.ModelParameters.ValidationData.dataSource(\_:)](validationdata/datasource%28__%29.md): A validation dataset represented by a data source.
- [MLSoundClassifier.ModelParameters.ValidationData.dictionary(\_:)](validationdata/dictionary%28__%29.md): Deprecated. A validation dataset represented by a dictionary.
- [MLSoundClassifier.ModelParameters.ValidationData.none](validationdata/none.md): An empty validation dataset that skips the model validation phase after training.

## See Also

### Supporting types

- [MLSoundClassifier.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The algorithm options to train a sound classifier.
- [MLSoundClassifier.ModelParameters.ClassifierType](classifiertype.md): The classifier options for a sound classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeatureExtractorType](featureextractortype.md): The feature-extractor options for a sound-classifier training algorithm.
- [MLSoundClassifier.ModelParameters.FeaturePrintType](featureprinttype.md): The type options for an Audio Feature Print feature extractor.
