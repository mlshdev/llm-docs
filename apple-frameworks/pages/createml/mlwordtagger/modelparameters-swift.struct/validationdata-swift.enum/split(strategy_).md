> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:)](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum/split(strategy:))

# MLWordTagger.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

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

- [MLWordTagger.ModelParameters.ValidationData.table(\_:tokenColumn:labelColumn:)](table%28__tokencolumn_labelcolumn_%29.md): Deprecated. Sets the validation data from the provided data table.
- [MLWordTagger.ModelParameters.ValidationData.dataFrame(\_:tokenColumn:labelColumn:)](dataframe%28__tokencolumn_labelcolumn_%29.md): Set validation data from the DataFrame provided.
- [MLWordTagger.ModelParameters.ValidationData.tuples(\_:)](tuples%28__%29.md): Sets the validation data from a list of tokens and labels.
- [MLWordTagger.ModelParameters.ValidationData.none](none.md): Doesn’t set validation data.
