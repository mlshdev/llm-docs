> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusicuserevent](https://developer.apple.com/documentation/avfaudio/avmusicuserevent)

# AVMusicUserEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a custom user message.

## Declaration

```swift
class AVMusicUserEvent
```

<a id="overview"></a>

## Overview

When playback of an [AVMusicTrack](avmusictrack.md) reaches this event, the system calls the track’s callback. You can’t modify the size and contents of an [AVMusicUserEvent](avmusicuserevent.md) once you create it.

## Topics

### Creating a User Event

- [init(data:)](avmusicuserevent/init%28data_%29.md): Creates a user event with the data you specify.

### Inspecting a User Event

- [sizeInBytes](avmusicuserevent/sizeinbytes.md): The size of the data that the user event represents.

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
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.

# AVMusicUserEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a custom user message.

## Declaration

```objectivec
@interface AVMusicUserEvent : AVMusicEvent
```

<a id="overview"></a>

## Overview

When playback of an [AVMusicTrack](avmusictrack.md) reaches this event, the system calls the track’s callback. You can’t modify the size and contents of an [AVMusicUserEvent](avmusicuserevent.md) once you create it.

## Topics

### Creating a User Event

- [initWithData:](avmusicuserevent/init%28data_%29.md): Creates a user event with the data you specify.

### Inspecting a User Event

- [sizeInBytes](avmusicuserevent/sizeinbytes.md): The size of the data that the user event represents.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.
