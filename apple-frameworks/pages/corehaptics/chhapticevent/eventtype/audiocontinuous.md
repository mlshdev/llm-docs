> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/eventtype/audiocontinuous](https://developer.apple.com/documentation/corehaptics/chhapticevent/eventtype/audiocontinuous)

# audioContinuous (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An audio event with a looped waveform of arbitrary length.

## Declaration

```swift
static let audioContinuous: CHHapticEvent.EventType
```

<a id="Discussion"></a>

## Discussion

Continuous audio patterns take the form of lengthier feedback over a period of time. You must provide continuous events with a duration to determine their endpoint.

## See Also

### Enumerating Haptic Types

- [audioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [hapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [hapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.

# CHHapticEventTypeAudioContinuous (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An audio event with a looped waveform of arbitrary length.

## Declaration

```objectivec
extern CHHapticEventType CHHapticEventTypeAudioContinuous;
```

<a id="Discussion"></a>

## Discussion

Continuous audio patterns take the form of lengthier feedback over a period of time. You must provide continuous events with a duration to determine their endpoint.

## See Also

### Enumerating Haptic Types

- [CHHapticEventTypeAudioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [CHHapticEventTypeHapticTransient](haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [CHHapticEventTypeHapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.
