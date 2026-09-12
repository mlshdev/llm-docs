> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/datasource](https://developer.apple.com/documentation/createml/mltextclassifier/datasource)

# MLTextClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

A data source for a text classifier.

## Declaration

```swift
enum DataSource
```

## Topics

### Creating a data source

- [MLTextClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): A root directory of labeled directories for your data set.

### Retrieving the data

- [labeledTexts()](datasource/labeledtexts%28%29.md): Fetches the labeled data from the data source.
- [stratifiedSplit(proportions:seed:labelColumn:textColumn:)](datasource/stratifiedsplit%28proportions_seed_labelcolumn_textcolumn_%29.md): Deprecated. Generates a data table by splitting the data source into strata.

## See Also

### Creating and training a text classifier

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a text classifier.
- [init(trainingData:textColumn:labelColumn:parameters:)](init%28trainingdata_textcolumn_labelcolumn_parameters_%29.md): Creates a text classifier.
- [MLTextClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the text classifier used for training during initialization.
