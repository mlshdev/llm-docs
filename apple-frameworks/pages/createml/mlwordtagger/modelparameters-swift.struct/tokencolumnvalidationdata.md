> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/tokencolumnvalidationdata](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/tokencolumnvalidationdata)

# tokenColumnValidationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 10.15)

The name of the column containing the tokens in the validation data table.

> Use the validation property instead.

## Declaration

```swift
var tokenColumnValidationData: String? { get set }
```

## See Also

### Deprecated

- [init(validationData:algorithm:language:tokenColumnValidationData:labelColumnValidationData:)](init%28validationdata_algorithm_language_tokencolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates model parameters.
- [init(validationData:algorithm:language:)](init%28validationdata_algorithm_language_%29.md): Deprecated. Creates model parameters.
- [validationData](validationdata-swift.property.md): Deprecated. The word tagger’s validation dataset as a data table.
- [labelColumnValidationData](labelcolumnvalidationdata.md): Deprecated. The name of the column containing the token labels in the validation data table.
