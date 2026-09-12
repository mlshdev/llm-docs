> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/eventtype/hapticcontinuous](https://developer.apple.com/documentation/corehaptics/chhapticevent/eventtype/hapticcontinuous)

# hapticContinuous (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A haptic event with a looped waveform of arbitrary length.

## Declaration

```swift
static let hapticContinuous: CHHapticEvent.EventType
```

<a id="Discussion"></a>

## Discussion

Continuous haptic patterns, like the sustained vibration from a ringtone, take the form of lengthier feedback over a period of time. You must provide continuous events with a duration to determine their endpoint. The maximum duration of a continuous haptic event is 30 seconds.

## See Also

### Enumerating Haptic Types

- [audioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [audioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [hapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.

# CHHapticEventTypeHapticContinuous (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A haptic event with a looped waveform of arbitrary length.

## Declaration

```objectivec
extern CHHapticEventType CHHapticEventTypeHapticContinuous;
```

<a id="Discussion"></a>

## Discussion

Continuous haptic patterns, like the sustained vibration from a ringtone, take the form of lengthier feedback over a period of time. You must provide continuous events with a duration to determine their endpoint. The maximum duration of a continuous haptic event is 30 seconds.

## See Also

### Enumerating Haptic Types

- [CHHapticEventTypeAudioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [CHHapticEventTypeAudioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [CHHapticEventTypeHapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
