> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct)

# MLTextClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Parameters that specify model training parameters and validation data.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(validation:algorithm:language:)](modelparameters-swift.struct/init%28validation_algorithm_language_%29.md): Creates model parameters for a text classifier with the specified validation data, algorithm, and language.
- [NLLanguage](../../naturallanguage/nllanguage.md): The languages that the Natural Language framework supports.
- [MLTextClassifier.ModelAlgorithmType](modelalgorithmtype.md): The type of algorithm that a text classifier uses.
- [MLTextClassifier.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): The validation data that a text classifier uses.

### Accessing parameters

- [algorithm](modelparameters-swift.struct/algorithm.md): The parameter’s algorithm setting.
- [language](modelparameters-swift.struct/language.md): The parameter’s language setting.
- [validation](modelparameters-swift.struct/validation.md): The validation dataset.
- [maxIterations](modelparameters-swift.struct/maxiterations.md): The maximum number of training iterations.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the model parameters in a playground.

### Deprecated

- [init(validationData:algorithm:language:)](modelparameters-swift.struct/init%28validationdata_algorithm_language_%29.md): Deprecated. Creates parameters for a text classifier with validation data in a set of labeled directories.
- [init(validationData:algorithm:language:textColumnValidationData:labelColumnValidationData:)](modelparameters-swift.struct/init%28validationdata_algorithm_language_textcolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates parameters for a text classifier with validation data in a data table.
- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. The validation data.
- [textColumnValidationData](modelparameters-swift.struct/textcolumnvalidationdata.md): Deprecated. The name of the text column in the validation data table.
- [labelColumnValidationData](modelparameters-swift.struct/labelcolumnvalidationdata.md): Deprecated. The name of the label column in the validation data table.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Creating and training a text classifier

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a text classifier.
- [init(trainingData:textColumn:labelColumn:parameters:)](init%28trainingdata_textcolumn_labelcolumn_parameters_%29.md): Creates a text classifier.
- [MLTextClassifier.DataSource](datasource.md): A data source for a text classifier.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the text classifier used for training during initialization.
