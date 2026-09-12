> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeybarometricpressure](https://developer.apple.com/documentation/healthkit/hkmetadatakeybarometricpressure)

# HKMetadataKeyBarometricPressure (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The metadata key for the barometric pressure associated with a sample.

## Declaration

```swift
let HKMetadataKeyBarometricPressure: String
```

<a id="Discussion"></a>

## Discussion

This key takes an [HKQuantity](hkquantity.md) value that measures the barometric pressure in units of pressure, such as [atmosphere()](hkunit/atmosphere%28%29.md), [pascal()](hkunit/pascal%28%29.md), or [millimeterOfMercury()](hkunit/millimeterofmercury%28%29.md).

## See Also

### Weather Keys

- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.

# HKMetadataKeyBarometricPressure (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The metadata key for the barometric pressure associated with a sample.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyBarometricPressure;
```

<a id="Discussion"></a>

## Discussion

This key takes an [HKQuantity](hkquantity.md) value that measures the barometric pressure in units of pressure, such as [atmosphereUnit](hkunit/atmosphere%28%29.md), [pascalUnit](hkunit/pascal%28%29.md), or [millimeterOfMercuryUnit](hkunit/millimeterofmercury%28%29.md).

## See Also

### Weather Keys

- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.
