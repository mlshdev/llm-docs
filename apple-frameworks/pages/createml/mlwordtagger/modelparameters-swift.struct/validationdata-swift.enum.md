> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/validationdata-swift.enum)

# MLWordTagger.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The validation data.

## Declaration

```swift
enum ValidationData
```

## Topics

### Specifying validation data

- [MLWordTagger.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md): Generates the validation data by splitting the training dataset.
- [MLWordTagger.ModelParameters.ValidationData.table(\_:tokenColumn:labelColumn:)](validationdata-swift.enum/table%28__tokencolumn_labelcolumn_%29.md): Deprecated. Sets the validation data from the provided data table.
- [MLWordTagger.ModelParameters.ValidationData.dataFrame(\_:tokenColumn:labelColumn:)](validationdata-swift.enum/dataframe%28__tokencolumn_labelcolumn_%29.md): Set validation data from the DataFrame provided.
- [MLWordTagger.ModelParameters.ValidationData.tuples(\_:)](validationdata-swift.enum/tuples%28__%29.md): Sets the validation data from a list of tokens and labels.
- [MLWordTagger.ModelParameters.ValidationData.none](validationdata-swift.enum/none.md): Doesn’t set validation data.

## See Also

### Creating parameters

- [init(validation:algorithm:language:)](init%28validation_algorithm_language_%29.md): Creates model parameters.
- [MLWordTagger.ModelAlgorithmType](../modelalgorithmtype.md): The algorithm type.
