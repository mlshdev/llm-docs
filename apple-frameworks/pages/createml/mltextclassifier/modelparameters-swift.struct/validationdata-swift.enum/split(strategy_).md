> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:))

# MLTextClassifier.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Generates the validation data by splitting the training dataset.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

<a id="discussion"></a>

## Discussion

By default, model parameters use this approach to specify the validation data.

## See Also

### Specifying validation data

- [MLTextClassifier.ModelParameters.ValidationData.table(\_:textColumn:labelColumn:)](table%28__textcolumn_labelcolumn_%29.md): Deprecated. Sets the validation data from the provided data table.
- [MLTextClassifier.ModelParameters.ValidationData.dataFrame(\_:textColumn:labelColumn:)](dataframe%28__textcolumn_labelcolumn_%29.md): Set validation data from the MLDataTable provided.
- [MLTextClassifier.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): Sets the validation data from the provided data source.
- [MLTextClassifier.ModelParameters.ValidationData.dictionary(\_:)](dictionary%28__%29.md): Sets the validation data from the provided dictionary.
- [MLTextClassifier.ModelParameters.ValidationData.none](none.md): Doesn’t set validation data.
