> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct)

# MLWordTagger.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.14+

Parameters that specify model training parameters and validation data.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(validation:algorithm:language:)](modelparameters-swift.struct/init%28validation_algorithm_language_%29.md): Creates model parameters.
- [MLWordTagger.ModelAlgorithmType](modelalgorithmtype.md): The algorithm type.
- [MLWordTagger.ModelParameters.ValidationData](modelparameters-swift.struct/validationdata-swift.enum.md): The validation data.

### Accessing parameters

- [algorithm](modelparameters-swift.struct/algorithm.md): The algorithm type.
- [language](modelparameters-swift.struct/language.md): The language setting.
- [validation](modelparameters-swift.struct/validation.md): The validation dataset.
- [maxIterations](modelparameters-swift.struct/maxiterations.md): The maximum training iterations.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the model parameters in a playground.

### Deprecated

- [init(validationData:algorithm:language:tokenColumnValidationData:labelColumnValidationData:)](modelparameters-swift.struct/init%28validationdata_algorithm_language_tokencolumnvalidationdata_labelcolumnvalidationdata_%29.md): Deprecated. Creates model parameters.
- [init(validationData:algorithm:language:)](modelparameters-swift.struct/init%28validationdata_algorithm_language_%29.md): Deprecated. Creates model parameters.
- [validationData](modelparameters-swift.struct/validationdata-swift.property.md): Deprecated. The word tagger’s validation dataset as a data table.
- [tokenColumnValidationData](modelparameters-swift.struct/tokencolumnvalidationdata.md): Deprecated. The name of the column containing the tokens in the validation data table.
- [labelColumnValidationData](modelparameters-swift.struct/labelcolumnvalidationdata.md): Deprecated. The name of the column containing the token labels in the validation data table.

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

### Creating and training a word tagger

- [init(trainingData:parameters:)](init%28trainingdata_parameters_%29.md): Creates a word tagger.
- [init(trainingData:tokenColumn:labelColumn:parameters:)](init%28trainingdata_tokencolumn_labelcolumn_parameters_%29.md): Creates a word tagger.
- [MLWordTagger.Token](token.md): The token type of a word tagger, which is a string.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the word tagger used for training during initialization.
