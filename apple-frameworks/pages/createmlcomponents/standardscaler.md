> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/standardscaler](https://developer.apple.com/documentation/createmlcomponents/standardscaler)

# StandardScaler

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that standardizes the input by removing the mean and scaling to unit variance.

## Declaration

```swift
struct StandardScaler<Element> where Element : BinaryFloatingPoint, Element : Decodable, Element : Encodable
```

## Topics

### Creating an estimator

- [init()](standardscaler/init%28%29.md): Creates a standard scaling estimator.

### Fitting

- [fitted(to:eventHandler:)](standardscaler/fitted%28to_eventhandler_%29.md): Fits a transformer to a particular input sequence by computing the mean and standard deviation.

### Default Implementations

- [Estimator Implementations](standardscaler/estimator-implementations.md)
- [UpdatableEstimator Implementations](standardscaler/updatableestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UpdatableEstimator](updatableestimator.md)

## See Also

### Scalers

- [MaxAbsScaler](maxabsscaler.md): An estimator that scales the input values so that the maximum absolute value is 1.0.
- [MinMaxScaler](minmaxscaler.md): An estimator that scales the input values so that they all lie in a closed range.
- [NormalizationScaler](normalizationscaler.md): An estimator that normalizes the input values using a normalization strategy.
- [RobustScaler](robustscaler.md): An estimator that scales the input using statistics that are robust to outliers.
