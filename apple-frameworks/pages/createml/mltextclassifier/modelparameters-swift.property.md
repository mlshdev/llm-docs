> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.property

# modelParameters

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

The configuration parameters that the text classifier used for training during initialization.

## Declaration

```swift
let modelParameters: MLTextClassifier.ModelParameters
```

## See Also

### Creating and training a text classifier

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a text classifier.
- [init(trainingData:textColumn:labelColumn:parameters:)](init%28trainingdata_textcolumn_labelcolumn_parameters_%29.md): Creates a text classifier.
- [MLTextClassifier.DataSource](datasource.md): A data source for a text classifier.
- [MLTextClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
