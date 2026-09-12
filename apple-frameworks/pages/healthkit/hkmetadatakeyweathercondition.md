> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyweathercondition](https://developer.apple.com/documentation/healthkit/hkmetadatakeyweathercondition)

# HKMetadataKeyWeatherCondition (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that represents the weather condition during the sample.

## Declaration

```swift
let HKMetadataKeyWeatherCondition: String
```

<a id="Discussion"></a>

## Discussion

This key takes an an [NSNumber](../foundation/nsnumber.md) value that contains an [HKWeatherCondition](hkweathercondition.md) value. Set this key on an [HKWorkout](hkworkout.md) object to represent the overall weather condition during the workout.

## Topics

### Valid Weather Conditions

- [HKWeatherCondition](hkweathercondition.md): Constants that indicate a type of weather.

## See Also

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.

# HKMetadataKeyWeatherCondition (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A key that represents the weather condition during the sample.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyWeatherCondition;
```

<a id="Discussion"></a>

## Discussion

This key takes an an [NSNumber](../foundation/nsnumber.md) value that contains an [HKWeatherCondition](hkweathercondition.md) value. Set this key on an [HKWorkout](hkworkout.md) object to represent the overall weather condition during the workout.

## Topics

### Valid Weather Conditions

- [HKWeatherCondition](hkweathercondition.md): Constants that indicate a type of weather.

## See Also

### Weather Keys

- [HKMetadataKeyBarometricPressure](hkmetadatakeybarometricpressure.md): The metadata key for the barometric pressure associated with a sample.
- [HKMetadataKeyWeatherHumidity](hkmetadatakeyweatherhumidity.md): A key that represents the weather humidity during the sample.
- [HKMetadataKeyWeatherTemperature](hkmetadatakeyweathertemperature.md): A key that represents the weather temperature during the sample.
