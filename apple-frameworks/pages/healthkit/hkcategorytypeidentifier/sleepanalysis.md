> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/sleepanalysis](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/sleepanalysis)

# sleepAnalysis (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type for sleep analysis information.

## Declaration

```swift
static let sleepAnalysis: HKCategoryTypeIdentifier
```

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

These samples use values from the [HKCategoryValueSleepAnalysis](../hkcategoryvaluesleepanalysis.md) enum.

For best results when analyzing sleep samples, it’s recommended that you use [HKMetadataKeyTimeZone](../hkmetadatakeytimezone.md) to store time zone metadata with your sleep sample data.

## See Also

### Mindfulness and sleep

- [mindfulSession](mindfulsession.md): A category sample type for recording a mindful session.
- [appleSleepingWristTemperature](../hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassification](../hkapplesleepingbreathingdisturbancesclassification.md)

# HKCategoryTypeIdentifierSleepAnalysis (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A category sample type for sleep analysis information.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierSleepAnalysis;
```

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

These samples use values from the [HKCategoryValueSleepAnalysis](../hkcategoryvaluesleepanalysis.md) enum.

For best results when analyzing sleep samples, it’s recommended that you use [HKMetadataKeyTimeZone](../hkmetadatakeytimezone.md) to store time zone metadata with your sleep sample data.

## See Also

### Mindfulness and sleep

- [HKCategoryTypeIdentifierMindfulSession](mindfulsession.md): A category sample type for recording a mindful session.
- [HKCategoryValueSleepAnalysisAsleepValues](../hkcategoryvaluesleepanalysisasleepvalues.md)
- [HKQuantityTypeIdentifierAppleSleepingWristTemperature](../hkquantitytypeidentifier/applesleepingwristtemperature.md): A quantity sample type that records the wrist temperature during sleep.
- [HKAppleSleepingBreathingDisturbancesClassificationForQuantity](../hkapplesleepingbreathingdisturbancesclassificationforquantity.md)
- [HKAppleSleepingBreathingDisturbancesClassification](../hkapplesleepingbreathingdisturbancesclassification.md)
