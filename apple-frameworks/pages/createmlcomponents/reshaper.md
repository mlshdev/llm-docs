> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/reshaper](https://developer.apple.com/documentation/createmlcomponents/reshaper)

# Reshaper

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that reshapes a shaped array.

## Declaration

```swift
struct Reshaper<Scalar> where Scalar : MLShapedArrayScalar, Scalar : Decodable, Scalar : Encodable
```

## Topics

### Creating a transformer

- [init(shape:)](reshaper/init%28shape_%29.md): Creates a reshape transformer.

### Getting the shape

- [shape](reshaper/shape.md): The target shape.

### Performing the transformation

- [applied(\_:eventHandler:)](reshaper/applied%28__eventhandler_%29.md): Reshapes a sequence of inputs.
- [applied(to:eventHandler:)](reshaper/applied%28to_eventhandler_%29.md): Reshapes the input.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Preprocessors

- [LinearTransformer](lineartransformer.md): A transformer that runs an input through a scale and offset.
- [ImputeTransformer](imputetransformer.md): A transformer that replaces missing values with a pre-defined value.
- [OneHotEncoder](onehotencoder.md): An estimator that encodes categorical values to an integer array.
- [OrdinalEncoder](ordinalencoder.md): An ordinal encoder estimator encodes categorical values to ordinal integer values.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
