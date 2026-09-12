> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeylowcardiofitnesseventthreshold](https://developer.apple.com/documentation/healthkit/hkmetadatakeylowcardiofitnesseventthreshold)

# HKMetadataKeyLowCardioFitnessEventThreshold (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The VO2 max threshold used to categorize low-level cardio fitness events.

## Declaration

```swift
let HKMetadataKeyLowCardioFitnessEventThreshold: String
```

<a id="Discussion"></a>

## Discussion

The system sets this key on [lowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md) samples. It contains the threshold value for the user’s VO2 max measurements. The threshold value varies depending on certain parameters and physical characteristics, such as the user’s age.

A low-cardio fitness event indicates a period of time when the user’s VO2 max measurements consistently fall below the defined value. The system triggers this event approximately once every four months.

The value of this key is an [HKQuantity](hkquantity.md) object with a unit of `ml/kg/min`. For more information on working with complex units, see [unitMultiplied(by:)](hkunit/unitmultiplied%28by_%29.md), [unitDivided(by:)](hkunit/unitdivided%28by_%29.md), and [init(from:)](hkunit/init%28from_%29-9qont.md).

## See Also

### Cardio Fitness Keys

- [HKMetadataKeyVO2MaxValue](hkmetadatakeyvo2maxvalue.md): The maximum oxygen consumption rate during exercise of increasing intensity.

# HKMetadataKeyLowCardioFitnessEventThreshold (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The VO2 max threshold used to categorize low-level cardio fitness events.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyLowCardioFitnessEventThreshold;
```

<a id="Discussion"></a>

## Discussion

The system sets this key on [HKCategoryTypeIdentifierLowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md) samples. It contains the threshold value for the user’s VO2 max measurements. The threshold value varies depending on certain parameters and physical characteristics, such as the user’s age.

A low-cardio fitness event indicates a period of time when the user’s VO2 max measurements consistently fall below the defined value. The system triggers this event approximately once every four months.

The value of this key is an [HKQuantity](hkquantity.md) object with a unit of `ml/kg/min`. For more information on working with complex units, see [unitMultipliedByUnit:](hkunit/unitmultiplied%28by_%29.md), [unitDividedByUnit:](hkunit/unitdivided%28by_%29.md), and [unitFromString:](hkunit/init%28from_%29-9qont.md).

## See Also

### Cardio Fitness Keys

- [HKMetadataKeyVO2MaxValue](hkmetadatakeyvo2maxvalue.md): The maximum oxygen consumption rate during exercise of increasing intensity.
