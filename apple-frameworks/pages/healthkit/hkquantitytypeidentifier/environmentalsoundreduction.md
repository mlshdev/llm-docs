> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/environmentalsoundreduction](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/environmentalsoundreduction)

# environmentalSoundReduction (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample type that measures the difference in sound intensity when wearing headphones that lower environmental sound levels.

## Declaration

```swift
static let environmentalSoundReduction: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Environmental sound reduction values are automatically collected when wearing supported headphones.

## See Also

### Hearing

- [environmentalAudioExposure](environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [headphoneAudioExposure](headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.

# HKQuantityTypeIdentifierEnvironmentalSoundReduction (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample type that measures the difference in sound intensity when wearing headphones that lower environmental sound levels.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierEnvironmentalSoundReduction;
```

<a id="Discussion"></a>

## Discussion

These samples use sound pressure units (described in [HKUnit](../hkunit.md)). They measure discrete values of the equivalent continuous sound pressure level, described in [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](../hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md). Environmental sound reduction values are automatically collected when wearing supported headphones.

## See Also

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
