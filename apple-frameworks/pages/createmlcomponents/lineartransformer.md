> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartransformer](https://developer.apple.com/documentation/createmlcomponents/lineartransformer)

# LinearTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that runs an input through a scale and offset.

## Declaration

```swift
struct LinearTransformer<Element> where Element : BinaryFloatingPoint, Element : Decodable, Element : Encodable
```

## Topics

### Creating a regressor

- [init(scale:offset:)](lineartransformer/init%28scale_offset_%29.md): Creates a linear transformer.

### Getting the properties

- [offset](lineartransformer/offset.md): The amount to be offset after scaling.
- [scale](lineartransformer/scale.md): The amount to be scaled.

### Performing the transformation

- [applied(to:eventHandler:)](lineartransformer/applied%28to_eventhandler_%29.md): Scales an input.

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

- [ImputeTransformer](imputetransformer.md): A transformer that replaces missing values with a pre-defined value.
- [OneHotEncoder](onehotencoder.md): An estimator that encodes categorical values to an integer array.
- [OrdinalEncoder](ordinalencoder.md): An ordinal encoder estimator encodes categorical values to ordinal integer values.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
