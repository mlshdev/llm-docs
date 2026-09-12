> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyaudioexposurelevel](https://developer.apple.com/documentation/healthkit/hkmetadatakeyaudioexposurelevel)

# HKMetadataKeyAudioExposureLevel (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The audio level associated with an audio event.

## Declaration

```swift
let HKMetadataKeyAudioExposureLevel: String
```

<a id="Discussion"></a>

## Discussion

Use this key on audio exposure events. It takes an [HKQuantity](hkquantity.md) containing the audio level measured in [decibelAWeightedSoundPressureLevel()](hkunit/decibelaweightedsoundpressurelevel%28%29.md) units.

# HKMetadataKeyAudioExposureLevel (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The audio level associated with an audio event.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAudioExposureLevel;
```

<a id="Discussion"></a>

## Discussion

Use this key on audio exposure events. It takes an [HKQuantity](hkquantity.md) containing the audio level measured in [decibelAWeightedSoundPressureLevelUnit](hkunit/decibelaweightedsoundpressurelevel%28%29.md) units.
