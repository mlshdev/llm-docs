> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/eventtype/audiocustom](https://developer.apple.com/documentation/corehaptics/chhapticevent/eventtype/audiocustom)

# audioCustom (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An audio event using a waveform that you supply.

## Declaration

```swift
static let audioCustom: CHHapticEvent.EventType
```

<a id="Discussion"></a>

## Discussion

Custom waveforms behave like transient events, with no looping.

## See Also

### Enumerating Haptic Types

- [audioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [hapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [hapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.

# CHHapticEventTypeAudioCustom (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An audio event using a waveform that you supply.

## Declaration

```objectivec
extern CHHapticEventType CHHapticEventTypeAudioCustom;
```

<a id="Discussion"></a>

## Discussion

Custom waveforms behave like transient events, with no looping.

## See Also

### Enumerating Haptic Types

- [CHHapticEventTypeAudioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [CHHapticEventTypeHapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [CHHapticEventTypeHapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.
