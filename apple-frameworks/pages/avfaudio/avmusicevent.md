> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusicevent](https://developer.apple.com/documentation/avfaudio/avmusicevent)

# AVMusicEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A base class for the events you associate with a music track.

## Declaration

```swift
class AVMusicEvent
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAUPresetEvent](avaupresetevent.md)
- [AVExtendedNoteOnEvent](avextendednoteonevent.md)
- [AVExtendedTempoEvent](avextendedtempoevent.md)
- [AVMIDIChannelEvent](avmidichannelevent.md)
- [AVMIDIMetaEvent](avmidimetaevent.md)
- [AVMIDINoteEvent](avmidinoteevent.md)
- [AVMIDISysexEvent](avmidisysexevent.md)
- [AVMusicUserEvent](avmusicuserevent.md)
- [AVParameterEvent](avparameterevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Music Events

- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.

# AVMusicEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A base class for the events you associate with a music track.

## Declaration

```objectivec
@interface AVMusicEvent : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAUPresetEvent](avaupresetevent.md)
- [AVExtendedNoteOnEvent](avextendednoteonevent.md)
- [AVExtendedTempoEvent](avextendedtempoevent.md)
- [AVMIDIChannelEvent](avmidichannelevent.md)
- [AVMIDIMetaEvent](avmidimetaevent.md)
- [AVMIDINoteEvent](avmidinoteevent.md)
- [AVMIDISysexEvent](avmidisysexevent.md)
- [AVMusicUserEvent](avmusicuserevent.md)
- [AVParameterEvent](avparameterevent.md)

## See Also

### Handling Music Events

- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.
