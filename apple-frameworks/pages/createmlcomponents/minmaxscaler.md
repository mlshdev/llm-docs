> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/minmaxscaler](https://developer.apple.com/documentation/createmlcomponents/minmaxscaler)

# MinMaxScaler

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that scales the input values so that they all lie in a closed range.

## Declaration

```swift
struct MinMaxScaler<Element> where Element : BinaryFloatingPoint, Element : Decodable, Element : Encodable
```

## Topics

### Creating an estimator

- [init(range:)](minmaxscaler/init%28range_%29.md): Creates a min max scaler.

### Getting the properties

- [range](minmaxscaler/range.md): The desired range of transformed values.

### Fitting

- [fitted(to:eventHandler:)](minmaxscaler/fitted%28to_eventhandler_%29.md): Fits a min max scaler to a sequence of elements.

### Default Implementations

- [Estimator Implementations](minmaxscaler/estimator-implementations.md)

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scalers

- [StandardScaler](standardscaler.md): An estimator that standardizes the input by removing the mean and scaling to unit variance.
- [MaxAbsScaler](maxabsscaler.md): An estimator that scales the input values so that the maximum absolute value is 1.0.
- [NormalizationScaler](normalizationscaler.md): An estimator that normalizes the input values using a normalization strategy.
- [RobustScaler](robustscaler.md): An estimator that scales the input using statistics that are robust to outliers.
