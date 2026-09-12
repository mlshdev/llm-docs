> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlgazetteer/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlgazetteer/modelparameters-swift.struct)

# MLGazetteer.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

The model configuration parameters.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(language:)](modelparameters-swift.struct/init%28language_%29.md): Creates model parameters.

### Accessing parameters

- [language](modelparameters-swift.struct/language.md): The language setting.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the gazetteer settings.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the gazetteer settings that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the gazetteer settings shown in a playground.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a gazetteer

- [init(dictionary:parameters:)](init%28dictionary_parameters_%29.md): Creates a gazetteer from a dictionary of labels and terms.
- [init(labeledData:textColumn:labelColumn:parameters:)](init%28labeleddata_textcolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a gazetteer from a table of labels and terms.
- [modelParameters](modelparameters-swift.property.md): The model configuration parameters.
