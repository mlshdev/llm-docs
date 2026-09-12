> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/decibelhearinglevel()](https://developer.apple.com/documentation/healthkit/hkunit/decibelhearinglevel())

# decibelHearingLevel() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring the intensity of a sound.

## Declaration

```swift
class func decibelHearingLevel() -> Self
```

<a id="Discussion"></a>

## Discussion

This unit measures the intensity of the sound relative to the quietest sound a typical young, healthy individual can hear.

## See Also

### Related Documentation

- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# decibelHearingLevelUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring the intensity of a sound.

## Declaration

```objectivec
+ (instancetype) decibelHearingLevelUnit;
```

<a id="Discussion"></a>

## Discussion

This unit measures the intensity of the sound relative to the quietest sound a typical young, healthy individual can hear.

## See Also

### Related Documentation

- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
