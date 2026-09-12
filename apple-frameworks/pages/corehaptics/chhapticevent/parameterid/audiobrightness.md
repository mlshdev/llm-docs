> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/audiobrightness](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/audiobrightness)

# audioBrightness (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The high-frequency content of an audio event.

## Declaration

```swift
static let audioBrightness: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from 0.0 (maximum high-frequency reduction) to 1.0 (no high-frequency reduction). The default value is 1.0.

## See Also

### Audio Event Parameter IDs

- [audioVolume](audiovolume.md): The volume of an audio event.
- [audioPan](audiopan.md): The stereo panning of an audio event.
- [audioPitch](audiopitch.md): The pitch of an audio event.

# CHHapticEventParameterIDAudioBrightness (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The high-frequency content of an audio event.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDAudioBrightness;
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from 0.0 (maximum high-frequency reduction) to 1.0 (no high-frequency reduction). The default value is 1.0.

## See Also

### Audio Event Parameter IDs

- [CHHapticEventParameterIDAudioVolume](audiovolume.md): The volume of an audio event.
- [CHHapticEventParameterIDAudioPan](audiopan.md): The stereo panning of an audio event.
- [CHHapticEventParameterIDAudioPitch](audiopitch.md): The pitch of an audio event.
