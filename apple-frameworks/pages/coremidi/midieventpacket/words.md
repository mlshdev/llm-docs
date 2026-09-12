> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventpacket/words](https://developer.apple.com/documentation/coremidi/midieventpacket/words)

# words (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).

## Declaration

```swift
var words: (UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32, UInt32)
```

## See Also

### Configuring an Event Packet

- [timeStamp](timestamp.md): The event packet timestamp.
- [wordCount](wordcount.md): The number of valid MIDI 32-bit words in this event packet.

# words (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).

## Declaration

```objectivec
UInt32 words[64];
```

## See Also

### Configuring an Event Packet

- [timeStamp](timestamp.md): The event packet timestamp.
- [wordCount](wordcount.md): The number of valid MIDI 32-bit words in this event packet.
