> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/audiovolume](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/audiovolume)

# audioVolume (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The volume of an audio event.

## Declaration

```swift
static let audioVolume: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from 0.0 (silent) to 1.0 (maximum volume).

## See Also

### Audio Event Parameter IDs

- [audioPan](audiopan.md): The stereo panning of an audio event.
- [audioPitch](audiopitch.md): The pitch of an audio event.
- [audioBrightness](audiobrightness.md): The high-frequency content of an audio event.

# CHHapticEventParameterIDAudioVolume (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The volume of an audio event.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDAudioVolume;
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from 0.0 (silent) to 1.0 (maximum volume).

## See Also

### Audio Event Parameter IDs

- [CHHapticEventParameterIDAudioPan](audiopan.md): The stereo panning of an audio event.
- [CHHapticEventParameterIDAudioPitch](audiopitch.md): The pitch of an audio event.
- [CHHapticEventParameterIDAudioBrightness](audiobrightness.md): The high-frequency content of an audio event.
