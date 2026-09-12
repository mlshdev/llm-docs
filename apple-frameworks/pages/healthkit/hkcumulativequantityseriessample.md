> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcumulativequantityseriessample](https://developer.apple.com/documentation/healthkit/hkcumulativequantityseriessample)

# HKCumulativeQuantitySeriesSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

A sample representing a series of cumulative quantity values.

> Use [HKCumulativeQuantitySample](hkcumulativequantitysample.md) instead.

## Declaration

```swift
class HKCumulativeQuantitySeriesSample
```

## Topics

### Accessing Data

- [sum](hkcumulativequantityseriessample/sum.md): Deprecated. The sum of all the quantities in the series.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathSum](hkpredicatekeypathsum.md): The key path for accessing the sum of a quantity series inside a predicate format string.

## Relationships

### Inherits From

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.

# HKCumulativeQuantitySeriesSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

A sample representing a series of cumulative quantity values.

> Use [HKCumulativeQuantitySample](hkcumulativequantitysample.md) instead.

## Declaration

```objectivec
@interface HKCumulativeQuantitySeriesSample : HKCumulativeQuantitySample
```

## Topics

### Accessing Data

- [sum](hkcumulativequantityseriessample/sum.md): Deprecated. The sum of all the quantities in the series.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathSum](hkpredicatekeypathsum.md): The key path for accessing the sum of a quantity series inside a predicate format string.

## Relationships

### Inherits From

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md)

## See Also

### Related Documentation

- [HKQuantitySeriesSampleQuery](hkquantityseriessamplequery.md): A query that accesses the series data associated with a quantity sample.
