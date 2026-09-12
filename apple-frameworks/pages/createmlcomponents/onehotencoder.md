> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/onehotencoder](https://developer.apple.com/documentation/createmlcomponents/onehotencoder)

# OneHotEncoder

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that encodes categorical values to an integer array.

## Declaration

```swift
struct OneHotEncoder<Category> where Category : Comparable, Category : Decodable, Category : Encodable, Category : Hashable
```

<a id="overview"></a>

## Overview

The encoded array has an element count equal to the number of categories to encode. The encoded array for a given category has repeating zero values except at one index where the value is 1.

## Topics

### Creating the estimator

- [init()](onehotencoder/init%28%29.md): Creates a one-hot encoding estimator.

### Fitting

- [fitted(to:eventHandler:)](onehotencoder/fitted%28to_eventhandler_%29.md): Fits a one-hot encoder to a sequence of categories.

### Default Implementations

- [Estimator Implementations](onehotencoder/estimator-implementations.md)
- [UpdatableEstimator Implementations](onehotencoder/updatableestimator-implementations.md)

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
- [OrdinalEncoder](ordinalencoder.md): An ordinal encoder estimator encodes categorical values to ordinal integer values.
- [NumericImputer](numericimputer.md): An estimator that replaces missing values in the numeric input.
- [Reshaper](reshaper.md): A transformer that reshapes a shaped array.
- [CategoricalImputer](categoricalimputer.md): An estimator that replaces missing values in the categorical input.
- [OptionalUnwrapper](optionalunwrapper.md): A transformer that unwraps optional elements and throws when encountering missing values.
