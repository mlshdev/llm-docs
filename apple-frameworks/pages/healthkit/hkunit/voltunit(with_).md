> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkunit/voltunit(with:)

# voltUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a HealthKit unit for measuring the electrical potential difference in volts with the provided prefix.

## Declaration

```swift
class func voltUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Electrical potential difference

- [volt()](volt%28%29.md): Returns a HealthKit unit for measuring the difference in electrical potential using volts.

# voltUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a HealthKit unit for measuring the electrical potential difference in volts with the provided prefix.

## Declaration

```objectivec
+ (instancetype) voltUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

## See Also

### Electrical potential difference

- [voltUnit](volt%28%29.md): Returns a HealthKit unit for measuring the difference in electrical potential using volts.
