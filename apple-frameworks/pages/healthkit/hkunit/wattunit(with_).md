> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/wattunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/wattunit(with:))

# wattUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a HealthKit unit for measuring power, using watt units with the provided prefix.

## Declaration

```swift
class func wattUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Constructing power units

- [watt()](watt%28%29.md): Returns a HealthKit unit for measuring power in watts.

# wattUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a HealthKit unit for measuring power, using watt units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) wattUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Constructing power units

- [wattUnit](watt%28%29.md): Returns a HealthKit unit for measuring power in watts.
