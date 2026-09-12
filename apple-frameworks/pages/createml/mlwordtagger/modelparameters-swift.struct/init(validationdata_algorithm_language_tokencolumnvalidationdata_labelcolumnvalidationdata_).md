> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/init(validationdata:algorithm:language:tokencolumnvalidationdata:labelcolumnvalidationdata:)](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/init(validationdata:algorithm:language:tokencolumnvalidationdata:labelcolumnvalidationdata:))

# init(validationData:algorithm:language:tokenColumnValidationData:labelColumnValidationData:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.14+ (deprecated in 10.15)

Creates model parameters.

> Use the validation property instead.

## Declaration

```swift
init(validationData: MLDataTable?, algorithm: MLWordTagger.ModelAlgorithmType = .crf(revision: 1), language: NLLanguage? = nil, tokenColumnValidationData: String? = nil, labelColumnValidationData: String? = nil)
```

## Parameters

- `validationData`: The validation data table.
- `algorithm`: The algorithm type.
- `language`: The language of the text to tag.
- `tokenColumnValidationData`: The name of the column containing the tokens in the validation data table.
- `labelColumnValidationData`: The optional name of the column containing the token labels in the validation data table.

## See Also

### Deprecated

- [init(validationData:algorithm:language:)](init%28validationdata_algorithm_language_%29.md): Deprecated. Creates model parameters.
- [validationData](validationdata-swift.property.md): Deprecated. The word tagger’s validation dataset as a data table.
- [tokenColumnValidationData](tokencolumnvalidationdata.md): Deprecated. The name of the column containing the tokens in the validation data table.
- [labelColumnValidationData](labelcolumnvalidationdata.md): Deprecated. The name of the column containing the token labels in the validation data table.
