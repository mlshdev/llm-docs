> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/environmentalaudioexposureevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/environmentalaudioexposureevent)

# environmentalAudioExposureEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A category sample type that records exposure to potentially damaging sounds from the environment.

## Declaration

```swift
static let environmentalAudioExposureEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Apple Watch saves a [environmentalAudioExposureEvent](environmentalaudioexposureevent.md) sample when it generates a *noise notification*, sent when the average sound level reaches or exceeds a specified threshold for three minutes. Apple Watch doesn’t record or save any sounds. Users can enable or disable these notifications, or set the threshold from Settings \> Noise.

Environmental audio exposure event samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new environmental audio exposure events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Hearing \> Noise Notifications \> Add Data.

Samples of this type use values from the [HKCategoryValueEnvironmentalAudioExposureEvent](../hkcategoryvalueenvironmentalaudioexposureevent.md) enumeration.

## See Also

### Hearing

- [environmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [headphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [headphoneAudioExposureEvent](headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [audioExposureEvent](audioexposureevent.md): Deprecated. A category sample type for audio exposure events.

# HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A category sample type that records exposure to potentially damaging sounds from the environment.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent;
```

<a id="Discussion"></a>

## Discussion

Apple Watch saves a [HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent](environmentalaudioexposureevent.md) sample when it generates a *noise notification*, sent when the average sound level reaches or exceeds a specified threshold for three minutes. Apple Watch doesn’t record or save any sounds. Users can enable or disable these notifications, or set the threshold from Settings \> Noise.

Environmental audio exposure event samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new environmental audio exposure events to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Hearing \> Noise Notifications \> Add Data.

Samples of this type use values from the [HKCategoryValueEnvironmentalAudioExposureEvent](../hkcategoryvalueenvironmentalaudioexposureevent.md) enumeration.

## See Also

### Hearing

- [HKQuantityTypeIdentifierEnvironmentalAudioExposure](../hkquantitytypeidentifier/environmentalaudioexposure.md): A quantity sample type that measures audio exposure to sounds in the environment.
- [HKQuantityTypeIdentifierHeadphoneAudioExposure](../hkquantitytypeidentifier/headphoneaudioexposure.md): A quantity sample type that measures audio exposure from headphones.
- [HKCategoryTypeIdentifierHeadphoneAudioExposureEvent](headphoneaudioexposureevent.md): A category sample type that records exposure to potentially damaging sounds from headphones.
- [HKCategoryTypeIdentifierAudioExposureEvent](audioexposureevent.md): Deprecated. A category sample type for audio exposure events.
