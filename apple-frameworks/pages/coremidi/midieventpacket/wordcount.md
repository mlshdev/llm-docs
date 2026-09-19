> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midieventpacket/wordcount

# wordCount (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of valid MIDI 32-bit words in this event packet.

## Declaration

```swift
var wordCount: UInt32
```

## See Also

### Configuring an Event Packet

- [timeStamp](timestamp.md): The event packet timestamp.
- [words](words.md): A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).

# wordCount (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of valid MIDI 32-bit words in this event packet.

## Declaration

```objectivec
UInt32 wordCount;
```

## See Also

### Configuring an Event Packet

- [timeStamp](timestamp.md): The event packet timestamp.
- [words](words.md): A variable-length stream of native-endian 32-bit Universal MIDI Packets (UMP).
