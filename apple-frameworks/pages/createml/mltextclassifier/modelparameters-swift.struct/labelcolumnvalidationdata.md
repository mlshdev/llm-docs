> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/labelcolumnvalidationdata](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/labelcolumnvalidationdata)

# labelColumnValidationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

The name of the label column in the validation data table.

> Use the validation property instead.

## Declaration

```swift
var labelColumnValidationData: String? { get set }
```

## See Also

### Deprecated

- [init(validationData:algorithm:language:)](init%28validationdata_algorithm_language_%29.md): Deprecated. Creates parameters for a text classifier with validation data in a set of labeled directories.
- [init(validationData:algorithm:language:textColumnValidationData:labelColumnValidationData:)](init%28validationdata_algorithm_language_textcolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates parameters for a text classifier with validation data in a data table.
- [validationData](validationdata-swift.property.md): Deprecated. The validation data.
- [textColumnValidationData](textcolumnvalidationdata.md): Deprecated. The name of the text column in the validation data table.
