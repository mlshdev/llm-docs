> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata/dictionary(_:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/modelparameters-swift.struct/validationdata/dictionary(_:))

# MLSoundClassifier.ModelParameters.ValidationData.dictionary(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 11.0) · visionOS 1.0+

A validation dataset represented by a dictionary.

> Use DataSource.filesByLabel to provide dictionary validation data instead.

## Declaration

```swift
case dictionary([String : [URL]])
```

<a id="discussion"></a>

## Discussion

- dictionary: A validation dataset that uses a collection of labeled audio files represented by a dictionary. Each key of the dictionary is a label, and its value is an array of audio-file URLs.

## See Also

### Designating validation data

- [MLSoundClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the sound classifier’s training dataset using the split strategy.
- [MLSoundClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLSoundClassifier.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
