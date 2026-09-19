> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticevent/eventtype/haptictransient

# hapticTransient (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.

## Declaration

```swift
static let hapticTransient: CHHapticEvent.EventType
```

## Mentioned In

- [Playing a single-tap haptic pattern](../../playing-a-single-tap-haptic-pattern.md)

<a id="Discussion"></a>

## Discussion

Transient events complete on their own, even without a duration.

## See Also

### Enumerating Haptic Types

- [audioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [audioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [hapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.

# CHHapticEventTypeHapticTransient (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.

## Declaration

```objectivec
extern CHHapticEventType CHHapticEventTypeHapticTransient;
```

## Mentioned In

- [Playing a single-tap haptic pattern](../../playing-a-single-tap-haptic-pattern.md)

<a id="Discussion"></a>

## Discussion

Transient events complete on their own, even without a duration.

## See Also

### Enumerating Haptic Types

- [CHHapticEventTypeAudioContinuous](audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [CHHapticEventTypeAudioCustom](audiocustom.md): An audio event using a waveform that you supply.
- [CHHapticEventTypeHapticContinuous](hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.
