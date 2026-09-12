> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidimetaevent](https://developer.apple.com/documentation/avfaudio/avmidimetaevent)

# AVMIDIMetaEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents MIDI meta event messages.

## Declaration

```swift
class AVMIDIMetaEvent
```

<a id="overview"></a>

## Overview

You can’t modify the size and contents of this event once you create it. This doesn’t verify that the content matches the MIDI specification.

You can only add [AVMIDIMetaEvent.EventType.tempo](avmidimetaevent/eventtype/tempo.md), [AVMIDIMetaEvent.EventType.smpteOffset](avmidimetaevent/eventtype/smpteoffset.md), or [AVMIDIMetaEvent.EventType.timeSignature](avmidimetaevent/eventtype/timesignature.md) to a sequence’s tempo track.

## Topics

### Creating a Meta Event

- [init(type:data:)](avmidimetaevent/init%28type_data_%29.md): Creates an event with a MIDI meta event type and data.

### Getting the Meta Event Type

- [type](avmidimetaevent/type.md): The type of meta event.
- [AVMIDIMetaEvent.EventType](avmidimetaevent/eventtype.md): Constants that represent the types of meta events.

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

### Handling MIDI Events

- [AVMIDINoteEvent](avmidinoteevent.md): An object that represents MIDI note on or off messages.
- [AVMIDISysexEvent](avmidisysexevent.md): An object that represents a MIDI system exclusive message.

# AVMIDIMetaEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents MIDI meta event messages.

## Declaration

```objectivec
@interface AVMIDIMetaEvent : AVMusicEvent
```

<a id="overview"></a>

## Overview

You can’t modify the size and contents of this event once you create it. This doesn’t verify that the content matches the MIDI specification.

You can only add [AVMIDIMetaEventTypeTempo](avmidimetaevent/eventtype/tempo.md), [AVMIDIMetaEventTypeSmpteOffset](avmidimetaevent/eventtype/smpteoffset.md), or [AVMIDIMetaEventTypeTimeSignature](avmidimetaevent/eventtype/timesignature.md) to a sequence’s tempo track.

## Topics

### Creating a Meta Event

- [initWithType:data:](avmidimetaevent/init%28type_data_%29.md): Creates an event with a MIDI meta event type and data.

### Getting the Meta Event Type

- [type](avmidimetaevent/type.md): The type of meta event.
- [AVMIDIMetaEventType](avmidimetaevent/eventtype.md): Constants that represent the types of meta events.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling MIDI Events

- [AVMIDINoteEvent](avmidinoteevent.md): An object that represents MIDI note on or off messages.
- [AVMIDISysexEvent](avmidisysexevent.md): An object that represents a MIDI system exclusive message.
