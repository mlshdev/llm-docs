> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/validationdata-swift.enum/dictionary(_:)](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/validationdata-swift.enum/dictionary(_:))

# MLImageClassifier.ModelParameters.ValidationData.dictionary(\_:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 11.0) · visionOS 1.0+

A validation dataset represented by a dictionary.

> Use DataSource.filesByLabel to provide dictionary validation data instead.

## Declaration

```swift
case dictionary([String : [URL]])
```

## See Also

### Designating validation data

- [MLImageClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the image classifier’s training dataset using the split strategy.
- [MLImageClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLImageClassifier.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
