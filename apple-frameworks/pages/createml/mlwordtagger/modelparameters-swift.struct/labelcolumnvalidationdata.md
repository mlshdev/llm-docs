> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/labelcolumnvalidationdata

# labelColumnValidationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 10.15)

The name of the column containing the token labels in the validation data table.

> Use the validation property instead.

## Declaration

```swift
var labelColumnValidationData: String? { get set }
```

## See Also

### Deprecated

- [init(validationData:algorithm:language:tokenColumnValidationData:labelColumnValidationData:)](init%28validationdata_algorithm_language_tokencolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates model parameters.
- [init(validationData:algorithm:language:)](init%28validationdata_algorithm_language_%29.md): Deprecated. Creates model parameters.
- [validationData](validationdata-swift.property.md): Deprecated. The word tagger’s validation dataset as a data table.
- [tokenColumnValidationData](tokencolumnvalidationdata.md): Deprecated. The name of the column containing the tokens in the validation data table.
