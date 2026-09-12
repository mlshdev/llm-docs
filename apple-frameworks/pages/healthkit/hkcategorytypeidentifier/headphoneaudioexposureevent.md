> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/headphoneaudioexposureevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/headphoneaudioexposureevent)

# headphoneAudioExposureEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.1+

A category sample type that records exposure to potentially damaging sounds from headphones.

## Declaration

```swift
static let headphoneAudioExposureEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

iPhone and Apple Watch save a [headphoneAudioExposureEvent](headphoneaudioexposureevent.md) sample when the device generates a notification about loud headphone audio. Both devices generate these notifications when the user listens to audio long enough and at a volume that could affect their hearing. In some regions, users can enable or disable loud headphone notifications from Settings \> Sounds & Haptics \> Headphone Safety.

Samples of this type use values from the [HKCategoryValueHeadphoneAudioExposureEvent](../hkcategoryvalueheadphoneaudioexposureevent.md) enumeration.

## Topics

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](../hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.
- [HKMetadataKeyAudioExposureDuration](../hkmetadatakeyaudioexposureduration.md): The audio exposure event’s duration.

## See Also

### Hearing

- [environmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [headphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [environmentalAudioExposureEvent](environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [audioExposureEvent](audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

# HKCategoryTypeIdentifierHeadphoneAudioExposureEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.1+

A category sample type that records exposure to potentially damaging sounds from headphones.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierHeadphoneAudioExposureEvent;
```

<a id="Discussion"></a>

## Discussion

iPhone and Apple Watch save a [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](headphoneaudioexposureevent.md) sample when the device generates a notification about loud headphone audio. Both devices generate these notifications when the user listens to audio long enough and at a volume that could affect their hearing. In some regions, users can enable or disable loud headphone notifications from Settings \> Sounds & Haptics \> Headphone Safety.

Samples of this type use values from the [HKCategoryValueHeadphoneAudioExposureEvent](../hkcategoryvalueheadphoneaudioexposureevent.md) enumeration.

## Topics

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](../hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.
- [HKMetadataKeyAudioExposureDuration](../hkmetadatakeyaudioexposureduration.md): The audio exposure event’s duration.

## See Also

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryTypeIdentifierAudioExposureEvent](audioexposureevent.md): Deprecated. A category sample type for audio exposure events.
