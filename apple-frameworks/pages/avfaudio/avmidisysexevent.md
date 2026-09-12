> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidisysexevent](https://developer.apple.com/documentation/avfaudio/avmidisysexevent)

# AVMIDISysexEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI system exclusive message.

## Declaration

```swift
class AVMIDISysexEvent
```

<a id="overview"></a>

## Overview

You can’t modify the size and contents of this event once you create it.

## Topics

### Creates a System Event

- [init(data:)](avmidisysexevent/init%28data_%29.md): Creates a system event with the data you specify.

### Getting the Size of the Event

- [sizeInBytes](avmidisysexevent/sizeinbytes.md): The size of the data that this event contains.

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
- [AVMIDIMetaEvent](avmidimetaevent.md): An object that represents MIDI meta event messages.

# AVMIDISysexEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a MIDI system exclusive message.

## Declaration

```objectivec
@interface AVMIDISysexEvent : AVMusicEvent
```

<a id="overview"></a>

## Overview

You can’t modify the size and contents of this event once you create it.

## Topics

### Creates a System Event

- [initWithData:](avmidisysexevent/init%28data_%29.md): Creates a system event with the data you specify.

### Getting the Size of the Event

- [sizeInBytes](avmidisysexevent/sizeinbytes.md): The size of the data that this event contains.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling MIDI Events

- [AVMIDINoteEvent](avmidinoteevent.md): An object that represents MIDI note on or off messages.
- [AVMIDIMetaEvent](avmidimetaevent.md): An object that represents MIDI meta event messages.
