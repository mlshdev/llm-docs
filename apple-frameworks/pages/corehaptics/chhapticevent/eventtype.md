> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/eventtype](https://developer.apple.com/documentation/corehaptics/chhapticevent/eventtype)

# CHHapticEvent.EventType (Swift)

**Framework:** Core Haptics  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The types of audio and haptic event waveforms.

## Declaration

```swift
struct EventType
```

## Mentioned In

- [Representing haptic patterns in AHAP files](../representing-haptic-patterns-in-ahap-files.md)

## Topics

### Specifying a Type

- [init(rawValue:)](eventtype/init%28rawvalue_%29.md): Initializes an event type from a raw string value.

### Enumerating Haptic Types

- [audioContinuous](eventtype/audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [audioCustom](eventtype/audiocustom.md): An audio event using a waveform that you supply.
- [hapticTransient](eventtype/haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [hapticContinuous](eventtype/hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Categorizing Haptic Events

- [type](type.md): The type of the haptic event.

# CHHapticEventType (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The types of audio and haptic event waveforms.

## Declaration

```objectivec
typedef NSString * CHHapticEventType;
```

## Mentioned In

- [Representing haptic patterns in AHAP files](../representing-haptic-patterns-in-ahap-files.md)

## Topics

### Enumerating Haptic Types

- [CHHapticEventTypeAudioContinuous](eventtype/audiocontinuous.md): An audio event with a looped waveform of arbitrary length.
- [CHHapticEventTypeAudioCustom](eventtype/audiocustom.md): An audio event using a waveform that you supply.
- [CHHapticEventTypeHapticTransient](eventtype/haptictransient.md): A brief impulse occurring at a specific point in time, like the feedback from toggling a switch.
- [CHHapticEventTypeHapticContinuous](eventtype/hapticcontinuous.md): A haptic event with a looped waveform of arbitrary length.

## See Also

### Categorizing Haptic Events

- [type](type.md): The type of the haptic event.
