> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/init(validationdata:algorithm:language:)](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/init(validationdata:algorithm:language:))

# init(validationData:algorithm:language:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.14+ (deprecated in 10.15)

Creates model parameters.

> Use the validation property instead.

## Declaration

```swift
init(validationData: [(tokens: [MLWordTagger.Token], labels: [String])], algorithm: MLWordTagger.ModelAlgorithmType = .crf(revision: 1), language: NLLanguage? = nil)
```

## Parameters

- `validationData`: The validation data of token and label pairs.
- `algorithm`: The algorithm type.
- `language`: The language of the text to tag.

## See Also

### Deprecated

- [init(validationData:algorithm:language:tokenColumnValidationData:labelColumnValidationData:)](init%28validationdata_algorithm_language_tokencolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates model parameters.
- [validationData](validationdata-swift.property.md): Deprecated. The word tagger’s validation dataset as a data table.
- [tokenColumnValidationData](tokencolumnvalidationdata.md): Deprecated. The name of the column containing the tokens in the validation data table.
- [labelColumnValidationData](labelcolumnvalidationdata.md): Deprecated. The name of the column containing the token labels in the validation data table.
