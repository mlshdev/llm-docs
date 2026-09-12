> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/init(validationdata:algorithm:language:textcolumnvalidationdata:labelcolumnvalidationdata:)](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/init(validationdata:algorithm:language:textcolumnvalidationdata:labelcolumnvalidationdata:))

# init(validationData:algorithm:language:textColumnValidationData:labelColumnValidationData:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

Creates parameters for a text classifier with validation data in a data table.

> Use the validation property instead.

## Declaration

```swift
init(validationData: MLDataTable? = nil, algorithm: MLTextClassifier.ModelAlgorithmType = .maxEnt(revision: 1), language: NLLanguage? = nil, textColumnValidationData: String? = nil, labelColumnValidationData: String? = nil)
```

## Parameters

- `validationData`: A data table the text classifier uses for validation data during training.
- `algorithm`: An algorithm type for the classifier.
- `language`: The language of the text to classify.
- `textColumnValidationData`: The name of the text column in the validation data table.
- `labelColumnValidationData`: The name of the label column in the validation data table.

## See Also

### Deprecated

- [init(validationData:algorithm:language:)](init%28validationdata_algorithm_language_%29.md): Deprecated. Creates parameters for a text classifier with validation data in a set of labeled directories.
- [validationData](validationdata-swift.property.md): Deprecated. The validation data.
- [textColumnValidationData](textcolumnvalidationdata.md): Deprecated. The name of the text column in the validation data table.
- [labelColumnValidationData](labelcolumnvalidationdata.md): Deprecated. The name of the label column in the validation data table.
