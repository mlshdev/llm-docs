> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetricprefix](https://developer.apple.com/documentation/healthkit/hkmetricprefix)

# HKMetricPrefix (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Prefixes that can be added to SI units to change the order of magnitude.

## Declaration

```swift
enum HKMetricPrefix
```

## Topics

### Prefixes

- [HKMetricPrefix.none](hkmetricprefix/none.md): A prefix that does not modify the base unit.
- [HKMetricPrefix.femto](hkmetricprefix/femto.md): A prefix that multiplies the base unit by 1e-15.
- [HKMetricPrefix.pico](hkmetricprefix/pico.md): A prefix that multiplies the base unit by 1e-12.
- [HKMetricPrefix.nano](hkmetricprefix/nano.md): A prefix that multiplies the base unit by 1e-9.
- [HKMetricPrefix.micro](hkmetricprefix/micro.md): A prefix that multiplies the base unit by 1e-6.
- [HKMetricPrefix.milli](hkmetricprefix/milli.md): A prefix that multiplies the base unit by 0.001.
- [HKMetricPrefix.centi](hkmetricprefix/centi.md): A prefix that multiplies the base unit by 0.01.
- [HKMetricPrefix.deci](hkmetricprefix/deci.md): A prefix that multiplies the base unit by 0.1.
- [HKMetricPrefix.deca](hkmetricprefix/deca.md): A prefix that multiplies the base unit by 10.
- [HKMetricPrefix.hecto](hkmetricprefix/hecto.md): A prefix that multiplies the base unit by 100.
- [HKMetricPrefix.kilo](hkmetricprefix/kilo.md): A prefix that multiplies the base unit by 1000.
- [HKMetricPrefix.mega](hkmetricprefix/mega.md): A prefix that multiplies the base unit by 1e6.
- [HKMetricPrefix.giga](hkmetricprefix/giga.md): A prefix that multiplies the base unit by 1e9.
- [HKMetricPrefix.tera](hkmetricprefix/tera.md): A prefix that multiplies the base unit by 1e12.

### Initializers

- [init(rawValue:)](hkmetricprefix/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.

# HKMetricPrefix (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Prefixes that can be added to SI units to change the order of magnitude.

## Declaration

```objectivec
enum HKMetricPrefix : NSInteger;
```

## Topics

### Prefixes

- [HKMetricPrefixNone](hkmetricprefix/none.md): A prefix that does not modify the base unit.
- [HKMetricPrefixFemto](hkmetricprefix/femto.md): A prefix that multiplies the base unit by 1e-15.
- [HKMetricPrefixPico](hkmetricprefix/pico.md): A prefix that multiplies the base unit by 1e-12.
- [HKMetricPrefixNano](hkmetricprefix/nano.md): A prefix that multiplies the base unit by 1e-9.
- [HKMetricPrefixMicro](hkmetricprefix/micro.md): A prefix that multiplies the base unit by 1e-6.
- [HKMetricPrefixMilli](hkmetricprefix/milli.md): A prefix that multiplies the base unit by 0.001.
- [HKMetricPrefixCenti](hkmetricprefix/centi.md): A prefix that multiplies the base unit by 0.01.
- [HKMetricPrefixDeci](hkmetricprefix/deci.md): A prefix that multiplies the base unit by 0.1.
- [HKMetricPrefixDeca](hkmetricprefix/deca.md): A prefix that multiplies the base unit by 10.
- [HKMetricPrefixHecto](hkmetricprefix/hecto.md): A prefix that multiplies the base unit by 100.
- [HKMetricPrefixKilo](hkmetricprefix/kilo.md): A prefix that multiplies the base unit by 1000.
- [HKMetricPrefixMega](hkmetricprefix/mega.md): A prefix that multiplies the base unit by 1e6.
- [HKMetricPrefixGiga](hkmetricprefix/giga.md): A prefix that multiplies the base unit by 1e9.
- [HKMetricPrefixTera](hkmetricprefix/tera.md): A prefix that multiplies the base unit by 1e12.

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.
