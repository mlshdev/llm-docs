> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/init(trainingdata:tokencolumn:labelcolumn:parameters:)](https://developer.apple.com/documentation/createml/mlwordtagger/init(trainingdata:tokencolumn:labelcolumn:parameters:))

# init(trainingData:tokenColumn:labelColumn:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a word tagger.

## Declaration

```swift
init(trainingData: DataFrame, tokenColumn: String, labelColumn: String, parameters: MLWordTagger.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: A data frame specifying training data.
- `tokenColumn`: The name of the token column in the training data frame.
- `labelColumn`: The name of the label column in the training data frame.
- `parameters`: The model parameters.

## See Also

### Creating and training a word tagger

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a word tagger.
- [MLWordTagger.Token](token.md): The token type of a word tagger, which is a string.
- [MLWordTagger.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the word tagger used for training during initialization.
