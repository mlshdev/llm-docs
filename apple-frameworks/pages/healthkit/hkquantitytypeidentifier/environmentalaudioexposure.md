> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/environmentalaudioexposure](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/environmentalaudioexposure)

# environmentalAudioExposure (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A quantity sample type that measures audio exposure to sounds in the environment.

## Declaration

```swift
static let environmentalAudioExposure: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). You create these units using the [decibelAWeightedSoundPressureLevel()](../hkunit/decibelaweightedsoundpressurelevel%28%29.md) method. They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Samples can be automatically collected by an Apple Watch.

## See Also

### Hearing

- [headphoneAudioExposure](headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [environmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [headphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [audioExposureEvent](../hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

# HKQuantityTypeIdentifierEnvironmentalAudioExposure (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A quantity sample type that measures audio exposure to sounds in the environment.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierEnvironmentalAudioExposure;
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). You create these units using the [decibelAWeightedSoundPressureLevelUnit](../hkunit/decibelaweightedsoundpressurelevel%28%29.md) method. They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Samples can be automatically collected by an Apple Watch.

## See Also

### Hearing

- [HKQuantityTypeIdentifierHeadphoneAudioExposure](headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryTypeIdentifierAudioExposureEvent](../hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.
