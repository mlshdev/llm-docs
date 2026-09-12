> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendedtempoevent](https://developer.apple.com/documentation/avfaudio/avextendedtempoevent)

# AVExtendedTempoEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a tempo change to a specific beats-per-minute value.

## Declaration

```swift
class AVExtendedTempoEvent
```

## Topics

### Creating a Tempo Event

- [init(tempo:)](avextendedtempoevent/init%28tempo_%29.md): Creates an extended tempo event.

### Configuring a Tempo Event

- [tempo](avextendedtempoevent/tempo.md): The tempo in beats per minute as a positive value.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.

# AVExtendedTempoEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a tempo change to a specific beats-per-minute value.

## Declaration

```objectivec
@interface AVExtendedTempoEvent : AVMusicEvent
```

## Topics

### Creating a Tempo Event

- [initWithTempo:](avextendedtempoevent/init%28tempo_%29.md): Creates an extended tempo event.

### Configuring a Tempo Event

- [tempo](avextendedtempoevent/tempo.md): The tempo in beats per minute as a positive value.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.
