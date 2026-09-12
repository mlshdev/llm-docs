> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/hertzunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/hertzunit(with:))

# hertzUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

## Declaration

```swift
class func hertzUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="Discussion"></a>

## Discussion

Hertz represent cycles per second.

## See Also

### Constructing frequency units

- [hertz()](hertz%28%29.md): Returns a HealthKit unit for measuring frequency in hertz.

# hertzUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

## Declaration

```objectivec
+ (instancetype) hertzUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="Discussion"></a>

## Discussion

Hertz represent cycles per second.

## See Also

### Constructing frequency units

- [hertzUnit](hertz%28%29.md): Returns a HealthKit unit for measuring frequency in hertz.
