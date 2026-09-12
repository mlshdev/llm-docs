> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:textcolumn:labelcolumn:)](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:textcolumn:labelcolumn:))

# MLTextClassifier.ModelParameters.ValidationData.dataFrame(\_:textColumn:labelColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Set validation data from the MLDataTable provided.

## Declaration

```swift
case dataFrame(DataFrame, textColumn: String, labelColumn: String)
```

## See Also

### Specifying validation data

- [MLTextClassifier.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generates the validation data by splitting the training dataset.
- [MLTextClassifier.ModelParameters.ValidationData.table(\_:textColumn:labelColumn:)](table%28__textcolumn_labelcolumn_%29.md): Deprecated. Sets the validation data from the provided data table.
- [MLTextClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): Sets the validation data from the provided data source.
- [MLTextClassifier.ModelParameters.ValidationData.dictionary(\_:)](dictionary%28__%29.md): Sets the validation data from the provided dictionary.
- [MLTextClassifier.ModelParameters.ValidationData.none](none.md): Doesn’t set validation data.
