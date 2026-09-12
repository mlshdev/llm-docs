> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/audioexposureevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/audioexposureevent)

# audioExposureEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

A category sample type for audio exposure events.

> Use [environmentalAudioExposureEvent](environmentalaudioexposureevent.md) instead.

## Declaration

```swift
static let audioExposureEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use values from [HKCategoryValueAudioExposureEvent](../hkcategoryvalueaudioexposureevent.md).

## Topics

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](../hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.

## See Also

### Hearing

- [environmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [headphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [environmentalAudioExposureEvent](environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [headphoneAudioExposureEvent](headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.

# HKCategoryTypeIdentifierAudioExposureEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

A category sample type for audio exposure events.

> Use [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](environmentalaudioexposureevent.md) instead.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierAudioExposureEvent;
```

<a id="Discussion"></a>

## Discussion

These samples use values from [HKCategoryValueAudioExposureEvent](../hkcategoryvalueaudioexposureevent.md).

## Topics

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](../hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.

## See Also

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](environmentalaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from the environment.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
