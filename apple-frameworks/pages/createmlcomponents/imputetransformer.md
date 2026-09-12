> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imputetransformer](https://developer.apple.com/documentation/createmlcomponents/imputetransformer)

# ImputeTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that replaces missing values with a pre-defined value.

## Declaration

```swift
struct ImputeTransformer<Element> where Element : Decodable, Element : Encodable
```

## Topics

### Creating a transformer

- [init(value:)](imputetransformer/init%28value_%29.md): Creates an impute transformer.

### Getting the impute value

- [value](imputetransformer/value.md): Impute value used to replace missing values.

### Performing the transformation

- [applied(to:eventHandler:)](imputetransformer/applied%28to_eventhandler_%29.md): Imputes a single input.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Preprocessors

- [LinearTransformer](lineartransformer.md): A transformer that runs an input through a scale and offset.
- [OneHotEncoder](onehotencoder.md): An estimator that encodes categorical values to an integer array.
- [OrdinalEncoder](ordinalencoder.md): An ordinal encoder estimator encodes categorical values to ordinal integer values.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
