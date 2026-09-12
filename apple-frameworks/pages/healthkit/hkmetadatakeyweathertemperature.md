> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyweathertemperature](https://developer.apple.com/documentation/healthkit/hkmetadatakeyweathertemperature)

# HKMetadataKeyWeatherTemperature (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that represents the weather temperature during the sample.

## Declaration

```swift
let HKMetadataKeyWeatherTemperature: String
```

<a id="Discussion"></a>

## Discussion

This key takes an `HKQuantity` value expressed in a unit of temperature. Set this key on an [HKWorkout](hkworkout.md) object to represent the overall temperature during the workout.

## See Also

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.

# HKMetadataKeyWeatherTemperature (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that represents the weather temperature during the sample.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyWeatherTemperature;
```

<a id="Discussion"></a>

## Discussion

This key takes an `HKQuantity` value expressed in a unit of temperature. Set this key on an [HKWorkout](hkworkout.md) object to represent the overall temperature during the workout.

## See Also

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherCondition](hkmetadatakeyweathercondition.md): A key that represents the weather condition during the sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
