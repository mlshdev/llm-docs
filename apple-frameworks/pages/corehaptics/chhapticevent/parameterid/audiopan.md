> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/audiopan](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/audiopan)

# audioPan (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The stereo panning of an audio event.

## Declaration

```swift
static let audioPan: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from -1.0 (panned hard left) to 1.0 (panned hard right). The default value is 0.0 (center panned).

## See Also

### Audio Event Parameter IDs

- [audioVolume](audiovolume.md): The volume of an audio event.
- [audioPitch](audiopitch.md): The pitch of an audio event.
- [audioBrightness](audiobrightness.md): The high-frequency content of an audio event.

# CHHapticEventParameterIDAudioPan (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The stereo panning of an audio event.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDAudioPan;
```

<a id="Discussion"></a>

## Discussion

This parameter value ranges from -1.0 (panned hard left) to 1.0 (panned hard right). The default value is 0.0 (center panned).

## See Also

### Audio Event Parameter IDs

- [CHHapticEventParameterIDAudioVolume](audiovolume.md): The volume of an audio event.
- [CHHapticEventParameterIDAudioPitch](audiopitch.md): The pitch of an audio event.
- [CHHapticEventParameterIDAudioBrightness](audiobrightness.md): The high-frequency content of an audio event.
