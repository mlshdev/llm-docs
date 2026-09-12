> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optionalunwrapper](https://developer.apple.com/documentation/createmlcomponents/optionalunwrapper)

# OptionalUnwrapper

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that unwraps optional elements and throws when encountering missing values.

## Declaration

```swift
struct OptionalUnwrapper<Element>
```

## Topics

### Creating a transformer

- [init()](optionalunwrapper/init%28%29.md): Creates a transformer that unwraps an optional element or throws if the value is nil.

### Performing the transformation

- [applied(to:eventHandler:)](optionalunwrapper/applied%28to_eventhandler_%29.md): Unwraps an optional element or throws if the value is `nil`.

## Relationships

### Conforms To

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
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
