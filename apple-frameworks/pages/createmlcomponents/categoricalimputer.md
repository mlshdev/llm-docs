> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/categoricalimputer](https://developer.apple.com/documentation/createmlcomponents/categoricalimputer)

# CategoricalImputer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that replaces missing values in the categorical input.

## Declaration

```swift
struct CategoricalImputer<Element> where Element : Decodable, Element : Encodable, Element : Hashable
```

## Topics

### Creating an estimator

- [init(\_:)](categoricalimputer/init%28__%29.md): Creates an imputer with a strategy.
- [init(constant:)](categoricalimputer/init%28constant_%29.md): Creates an imputer with a constant value to use when replacing missing values.

### Getting the properties

- [strategy](categoricalimputer/strategy-swift.property.md): The imputation strategy.

### Fitting

- [fitted(to:eventHandler:)](categoricalimputer/fitted%28to_eventhandler_%29.md): Fits a categorical imputer to a sequence of elements.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [CategoricalImputer.Strategy](categoricalimputer/strategy-swift.enum.md): An imputation strategy.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preprocessors

- [LinearTransformer](lineartransformer.md): A transformer that runs an input through a scale and offset.
- [ImputeTransformer](imputetransformer.md): A transformer that replaces missing values with a pre-defined value.
- [OneHotEncoder](onehotencoder.md): An estimator that encodes categorical values to an integer array.
- [OrdinalEncoder](ordinalencoder.md): An ordinal encoder estimator encodes categorical values to ordinal integer values.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
