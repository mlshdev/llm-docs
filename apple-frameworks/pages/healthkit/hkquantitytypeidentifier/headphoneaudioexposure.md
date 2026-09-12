> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/headphoneaudioexposure](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/headphoneaudioexposure)

# headphoneAudioExposure (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A quantity sample type that measures audio exposure from headphones.

## Declaration

```swift
static let headphoneAudioExposure: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). You create these units using the [decibelAWeightedSoundPressureLevel()](../hkunit/decibelaweightedsoundpressurelevel%28%29.md) method. They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Samples can be automatically detected by an iPhone or Apple Watch.

## See Also

### Hearing

- [environmentalAudioExposure](environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [environmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [headphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [audioExposureEvent](../hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

# HKQuantityTypeIdentifierHeadphoneAudioExposure (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A quantity sample type that measures audio exposure from headphones.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierHeadphoneAudioExposure;
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). You create these units using the [decibelAWeightedSoundPressureLevelUnit](../hkunit/decibelaweightedsoundpressurelevel%28%29.md) method. They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Samples can be automatically detected by an iPhone or Apple Watch.

## See Also

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](../hkcategorytypeidentifier/environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](../hkcategorytypeidentifier/headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryTypeIdentifierAudioExposureEvent](../hkcategorytypeidentifier/audioexposureevent.md): Deprecated. A category sample type for audio exposure events.
