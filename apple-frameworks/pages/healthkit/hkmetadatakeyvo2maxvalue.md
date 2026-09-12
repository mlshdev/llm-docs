> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyvo2maxvalue](https://developer.apple.com/documentation/healthkit/hkmetadatakeyvo2maxvalue)

# HKMetadataKeyVO2MaxValue (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The maximum oxygen consumption rate during exercise of increasing intensity.

## Declaration

```swift
let HKMetadataKeyVO2MaxValue: String
```

<a id="Discussion"></a>

## Discussion

The system sets this key on [lowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md) samples. It contains the value of the VO2 max measurement that triggered the event. The value of this key is an [HKQuantity](hkquantity.md) object with a unit of `ml/kg/min`. For more information on working with complex units, see [unitMultiplied(by:)](hkunit/unitmultiplied%28by_%29.md), [unitDivided(by:)](hkunit/unitdivided%28by_%29.md), and [init(from:)](hkunit/init%28from_%29-9qont.md).

## See Also

### Cardio Fitness Keys

- [HKMetadataKeyLowCardioFitnessEventThreshold](hkmetadatakeylowcardiofitnesseventthreshold.md): The VO2 max threshold used to categorize low-level cardio fitness events.

# HKMetadataKeyVO2MaxValue (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The maximum oxygen consumption rate during exercise of increasing intensity.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyVO2MaxValue;
```

<a id="Discussion"></a>

## Discussion

The system sets this key on [HKCategoryTypeIdentifierLowCardioFitnessEvent](hkcategorytypeidentifier/lowcardiofitnessevent.md) samples. It contains the value of the VO2 max measurement that triggered the event. The value of this key is an [HKQuantity](hkquantity.md) object with a unit of `ml/kg/min`. For more information on working with complex units, see [unitMultipliedByUnit:](hkunit/unitmultiplied%28by_%29.md), [unitDividedByUnit:](hkunit/unitdivided%28by_%29.md), and [unitFromString:](hkunit/init%28from_%29-9qont.md).

## See Also

### Cardio Fitness Keys

- [HKMetadataKeyLowCardioFitnessEventThreshold](hkmetadatakeylowcardiofitnesseventthreshold.md): The VO2 max threshold used to categorize low-level cardio fitness events.
