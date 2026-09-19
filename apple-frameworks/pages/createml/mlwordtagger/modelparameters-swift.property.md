> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.property

# modelParameters

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The configuration parameters that the word tagger used for training during initialization.

## Declaration

```swift
let modelParameters: MLWordTagger.ModelParameters
```

## See Also

### Creating and training a word tagger

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a word tagger.
- [init(trainingData:tokenColumn:labelColumn:parameters:)](init%28trainingdata_tokencolumn_labelcolumn_parameters_%29.md): Creates a word tagger.
- [MLWordTagger.Token](token.md): The token type of a word tagger, which is a string.
- [MLWordTagger.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
