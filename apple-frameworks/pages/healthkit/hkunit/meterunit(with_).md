> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/meterunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/meterunit(with:))

# meterUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring length, using meter units with the provided prefix.

## Declaration

```swift
class func meterUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring length based on meters and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of meters. Common uses include creating kilometer and centimeter units, as shown below.

**Swift**

```swift
let km = HKUnit.meterUnitWithMetricPrefix(.Kilo)
let cm = HKUnit.meterUnitWithMetricPrefix(.Centi)
```

**Objective-C**

```objc
HKUnit *km = [HKUnit meterUnitWithMetricPrefix:HKMetricPrefixKilo];
HKUnit *cm = [HKUnit meterUnitWithMetricPrefix:HKMetricPrefixCenti];
```

## See Also

### Constructing length units

- [meter()](meter%28%29.md): Returns a HealthKit unit for measuring length in meters.
- [inch()](inch%28%29.md): Returns a HealthKit unit for measuring length in inches.
- [foot()](foot%28%29.md): Returns a HealthKit unit for measuring length in feet.
- [yard()](yard%28%29.md): Returns a HealthKit unit for measuring length in yards.
- [mile()](mile%28%29.md): Returns a HealthKit unit for measuring length in miles.

# meterUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring length, using meter units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) meterUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring length based on meters and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of meters. Common uses include creating kilometer and centimeter units, as shown below.

**Swift**

```swift
let km = HKUnit.meterUnitWithMetricPrefix(.Kilo)
let cm = HKUnit.meterUnitWithMetricPrefix(.Centi)
```

**Objective-C**

```objc
HKUnit *km = [HKUnit meterUnitWithMetricPrefix:HKMetricPrefixKilo];
HKUnit *cm = [HKUnit meterUnitWithMetricPrefix:HKMetricPrefixCenti];
```

## See Also

### Constructing length units

- [meterUnit](meter%28%29.md): Returns a HealthKit unit for measuring length in meters.
- [inchUnit](inch%28%29.md): Returns a HealthKit unit for measuring length in inches.
- [footUnit](foot%28%29.md): Returns a HealthKit unit for measuring length in feet.
- [yardUnit](yard%28%29.md): Returns a HealthKit unit for measuring length in yards.
- [mileUnit](mile%28%29.md): Returns a HealthKit unit for measuring length in miles.
