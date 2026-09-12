> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mlwordtagger/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a word tagger.

## Declaration

```swift
init(trainingData: [(tokens: [MLWordTagger.Token], labels: [String])], parameters: MLWordTagger.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: An array of tuples containing the tokens and their labels.
- `parameters`: The model parameters.

## See Also

### Creating and training a word tagger

- [init(trainingData:tokenColumn:labelColumn:parameters:)](init%28trainingdata_tokencolumn_labelcolumn_parameters_%29.md): Creates a word tagger.
- [MLWordTagger.Token](token.md): The token type of a word tagger, which is a string.
- [MLWordTagger.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the word tagger used for training during initialization.
