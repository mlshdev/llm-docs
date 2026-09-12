> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/validationdata-swift.enum/none](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/validationdata-swift.enum/none)

# MLImageClassifier.ModelParameters.ValidationData.none

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

An empty validation dataset that skips the model validation phase after training.

## Declaration

```swift
case none
```

## See Also

### Designating validation data

- [MLImageClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the image classifier’s training dataset using the split strategy.
- [MLImageClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset represented by a data source.
- [MLImageClassifier.ModelParameters.ValidationData.dictionary(\_:)](dictionary%28__%29.md): Deprecated. A validation dataset represented by a dictionary.
