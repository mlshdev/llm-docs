> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/ordinalencoder](https://developer.apple.com/documentation/createmlcomponents/ordinalencoder)

# OrdinalEncoder

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An ordinal encoder estimator encodes categorical values to ordinal integer values.

## Declaration

```swift
struct OrdinalEncoder<Category> where Category : Comparable, Category : Decodable, Category : Encodable, Category : Hashable
```

## Topics

### Creating an encoder

- [init()](ordinalencoder/init%28%29.md): Creates an ordinal encoding estimator.

### Fitting

- [fitted(to:eventHandler:)](ordinalencoder/fitted%28to_eventhandler_%29.md): Fits an ordinal encoder to a sequence of categories.

### Default Implementations

- [Estimator Implementations](ordinalencoder/estimator-implementations.md)
- [UpdatableEstimator Implementations](ordinalencoder/updatableestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UpdatableEstimator](updatableestimator.md)

## See Also

### Preprocessors

- [LinearTransformer](lineartransformer.md): A transformer that runs an input through a scale and offset.
- [ImputeTransformer](imputetransformer.md): A transformer that replaces missing values with a pre-defined value.
- [OneHotEncoder](onehotencoder.md): An estimator that encodes categorical values to an integer array.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
