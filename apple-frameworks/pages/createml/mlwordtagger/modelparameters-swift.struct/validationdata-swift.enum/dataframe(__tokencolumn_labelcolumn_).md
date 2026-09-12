> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:tokencolumn:labelcolumn:)](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum/dataframe(_:tokencolumn:labelcolumn:))

# MLWordTagger.ModelParameters.ValidationData.dataFrame(\_:tokenColumn:labelColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 13.0+

Set validation data from the DataFrame provided.

## Declaration

```swift
case dataFrame(DataFrame, tokenColumn: String, labelColumn: String)
```

## See Also

### Specifying validation data

- [MLWordTagger.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): Generates the validation data by splitting the training dataset.
- [MLWordTagger.ModelParameters.ValidationData.table(\_:tokenColumn:labelColumn:)](table%28__tokencolumn_labelcolumn_%29.md): Deprecated. Sets the validation data from the provided data table.
- [MLWordTagger.ModelParameters.ValidationData.tuples(\_:)](tuples%28__%29.md): Sets the validation data from a list of tokens and labels.
- [MLWordTagger.ModelParameters.ValidationData.none](none.md): Doesn’t set validation data.
