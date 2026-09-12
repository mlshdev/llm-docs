> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyaudioexposureduration](https://developer.apple.com/documentation/healthkit/hkmetadatakeyaudioexposureduration)

# HKMetadataKeyAudioExposureDuration (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.1+

The audio exposure event’s duration.

## Declaration

```swift
let HKMetadataKeyAudioExposureDuration: String
```

<a id="Discussion"></a>

## Discussion

Use this key on headphone audio exposure events. It takes an [HKQuantity](hkquantity.md) containing the audio level measured in units of time.

## See Also

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.

# HKMetadataKeyAudioExposureDuration (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.1+

The audio exposure event’s duration.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAudioExposureDuration;
```

<a id="Discussion"></a>

## Discussion

Use this key on headphone audio exposure events. It takes an [HKQuantity](hkquantity.md) containing the audio level measured in units of time.

## See Also

### Metadata Keys

- [HKMetadataKeyAudioExposureLevel](hkmetadatakeyaudioexposurelevel.md): The audio level associated with an audio event.
