> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/normalizationscaler/normalizationstrategy](https://developer.apple.com/documentation/createmlcomponents/normalizationscaler/normalizationstrategy)

# NormalizationScaler.NormalizationStrategy

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A normalization strategy.

## Declaration

```swift
enum NormalizationStrategy
```

## Topics

### Normalization strategies

- [NormalizationScaler.NormalizationStrategy.l1](normalizationstrategy/l1.md): A normalization strategy that scales by the L1 Norm (sum of vector absolute values).
- [NormalizationScaler.NormalizationStrategy.l2](normalizationstrategy/l2.md): A normalization strategy that scales by the L2 Norm (Euclidean norm).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a scaler

- [init(norm:)](init%28norm_%29.md): Creates a normalization scaler.
