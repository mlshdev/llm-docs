> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/normalizationscaler](https://developer.apple.com/documentation/createmlcomponents/normalizationscaler)

# NormalizationScaler

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that normalizes the input values using a normalization strategy.

## Declaration

```swift
struct NormalizationScaler<Element> where Element : BinaryFloatingPoint, Element : Decodable, Element : Encodable
```

## Topics

### Creating a scaler

- [init(norm:)](normalizationscaler/init%28norm_%29.md): Creates a normalization scaler.
- [NormalizationScaler.NormalizationStrategy](normalizationscaler/normalizationstrategy.md): A normalization strategy.

### Getting the normalization

- [norm](normalizationscaler/norm.md): The normalization strategy.

### Fitting

- [fitted(to:eventHandler:)](normalizationscaler/fitted%28to_eventhandler_%29.md): Fits a normalization scaler to a sequence of elements.

### Default Implementations

- [Estimator Implementations](normalizationscaler/estimator-implementations.md)

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scalers

- [StandardScaler](standardscaler.md): An estimator that standardizes the input by removing the mean and scaling to unit variance.
- [MaxAbsScaler](maxabsscaler.md): An estimator that scales the input values so that the maximum absolute value is 1.0.
- [MinMaxScaler](minmaxscaler.md): An estimator that scales the input values so that they all lie in a closed range.
- [RobustScaler](robustscaler.md): An estimator that scales the input using statistics that are robust to outliers.
